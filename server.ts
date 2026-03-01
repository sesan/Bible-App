import dotenv from 'dotenv';
dotenv.config({ override: true });
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API endpoint for waitlist count
  app.get('/api/waitlist-count', async (req, res) => {
    try {
      const apiKey = process.env.BREVO_API_KEY;
      console.log('API Key present:', !!apiKey); // Debug log
      
      if (apiKey) {
        // Fetch real count from Brevo
        const response = await fetch('https://api.brevo.com/v3/contacts?limit=1', {
          headers: {
            'api-key': apiKey,
            'accept': 'application/json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          // Return the actual count from Brevo
          return res.json({ count: data.count });
        } else {
            const errorText = await response.text();
            console.error('Brevo API Error:', errorText);
        }
      } else {
          console.log('No API Key found in environment variables');
      }
      
      // If we reach here, something went wrong or no key
      return res.json({ count: 0 });
      
    } catch (error) {
      console.error('Error fetching waitlist count:', error);
      res.status(500).json({ count: 0 });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
      // Production static serving
      app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
