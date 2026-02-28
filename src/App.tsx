import React, { useEffect, useState } from 'react';
import { Instagram, Twitter, Video, Search, TextSelect, BookOpen, Compass, PenTool, Brain, Mic, Map, ArrowRight, Check, Pencil, Feather } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Brevo requires no-cors for direct AJAX submissions
      });
      // no-cors means we can't read the response, so we assume success if no network error
      setFormStatus('success');
    } catch (error) {
      console.error('Subscription error:', error);
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-black bg-white selection:bg-gray-200 selection:text-black">
      
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <div className="text-xl font-semibold tracking-tight flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              VERSE
            </div>
            <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1">
              <a href="#problem" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">The Journey</a>
              <a href="#solution" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">What We're Building</a>
              <a href="#community" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#waitlist" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">Log In</a>
            <a
              href="#waitlist"
              className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Section 1: Hero */}
        <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-8"
              >
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">Now in early access</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-[40px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-balance mb-8"
              >
                Your faith journey.<br />
                Every note. Every thought.<br />
                All in one place.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed"
              >
                Because the way you read your Bible is personal. Your app should be too.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y: 20, scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a
                  href="#waitlist"
                  className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-4 text-base font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  Join the Waitlist <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
            
            <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center lg:justify-end">
              {/* Background decorative glow */}
              <div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gray-100 rounded-full blur-3xl -z-10 opacity-70"></div>
              
              {/* iPhone Mockup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-black rounded-[48px] shadow-2xl border-[10px] border-black overflow-hidden ring-1 ring-gray-200/50"
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 inset-x-0 h-7 bg-black rounded-full w-[100px] mx-auto z-20"></div>
                
                {/* Screen Content */}
                <img 
                  src="/hero-mockup.png" 
                  alt="Verse App Interface" 
                  className="w-full h-full object-cover bg-white"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback if the user hasn't uploaded the image yet
                    e.currentTarget.src = "https://picsum.photos/seed/bibleapp/800/1600?grayscale";
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div>
              <div className="text-sm text-gray-500 mb-1">Waitlist Size</div>
              <div className="text-3xl font-medium tracking-tight">0 People</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Cost to Join</div>
              <div className="text-3xl font-medium tracking-tight">Free</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Commitment</div>
              <div className="text-3xl font-medium tracking-tight">No Spam</div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: The Journey (Split Layout) */}
        <section id="problem" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className="sticky top-32">
                <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-4">The Journey</div>
                <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
                  Faith is deeply personal.<br />
                  Your Bible app should reflect that.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                  You deserve more than a plan someone else designed. Here is what a truly personal Bible experience looks like.
                </p>
              </div>
            </motion.div>
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { icon: Search, title: "Your reflections, always with you", desc: "Every insight you write deserves to be findable, not forgotten. Your notes are part of your story with God." },
                { icon: Pencil, title: "Mark exactly what moves you", desc: "Sometimes one word in a verse carries everything. Your Bible app should let you honour that moment precisely." },
                { icon: BookOpen, title: "Reflect without losing the thread", desc: "Your thoughts are richest right in the moment. Journaling inside your Bible keeps your reflection connected to what sparked it." },
                { icon: Compass, title: "Start from where you actually are", desc: "Whether you are exploring faith for the first time or going deeper, your reading path should begin with your real questions, not someone else's plan." },
                { icon: Feather, title: "Make it feel like yours", desc: "The most powerful Bibles in the world are full of personal marks and memories. Your digital Bible should feel the same way." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="bg-gray-50 rounded-[24px] p-8 md:p-10 flex gap-6 items-start border border-gray-100 transition-colors hover:bg-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <item.icon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Something Is Coming (Dark Mode) */}
        <section id="solution" className="py-32 bg-[#111] text-white text-center">
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto px-6"
          >
            <div className="text-xs font-semibold tracking-wide uppercase text-gray-500 mb-8">Something Is Coming</div>
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              We've seen every problem.<br className="hidden md:block" />
              We've been sitting with it for a long time.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12">
              And we think we've finally built the answer.
            </p>
            
            <div className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              <p>
                We're not ready to show you yet. But if you've nodded at anything on this page, what we're building was made for you. Every frustration you just read has a solution we've been quietly building. We'll reveal it first to the people on this list.
              </p>
            </div>

            <a href="#waitlist" className="inline-flex bg-white text-black rounded-full px-10 py-5 text-lg font-medium transition-transform hover:scale-105 mb-6">
              Put Me on the List
            </a>
            
            <p className="text-sm text-gray-500">
              The people who join first will shape what gets built.
            </p>
          </motion.div>
        </section>

        {/* Section 4: Social Proof */}
        <section id="community" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-4">Community</div>
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              You're not the only one.
            </h2>
            <p className="text-lg text-gray-600">
              Others felt it too. Here's what they said.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "I have 4 years of notes trapped in YouVersion plans. I'd switch apps tomorrow if someone solved this.",
              "I've been using GoodNotes alongside my Bible app just to write in the margins. It's embarrassing that no app has fixed this.",
              "I became a Christian last year. Every plan felt like it was made for someone who already knew everything. I just had questions."
            ].map((quote, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="bg-gray-50 rounded-[24px] p-10 border border-gray-100 flex flex-col"
              >
                <div className="text-6xl font-serif text-gray-300 leading-none mb-6">"</div>
                <p className="text-lg text-gray-800 leading-relaxed mb-8 flex-grow">
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="text-sm font-medium text-gray-600">Early Member</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Waitlist CTA */}
        <section id="waitlist" className="py-32 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto bg-gray-50 rounded-[40px] p-12 md:p-24 text-center border border-gray-100"
          >
            <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-6">Be First to Know</div>
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-tight mb-6">
              The reveal is coming.<br />
              You should be there when it happens.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Join the list and we'll send you one clue a week about what we're building. When we're ready to show the world, you'll see it first.
            </p>

            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-xl mx-auto bg-[#e7faf0] border border-[#13ce66] rounded-full px-8 py-6 flex items-center gap-6 text-left"
              >
                <div className="w-12 h-12 shrink-0 bg-[#13ce66]/20 rounded-full flex items-center justify-center">
                  <Check size={24} className="text-[#085229]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#085229] mb-1">You have been subscribed</h3>
                  <p className="text-[#085229]/80 text-base">
                    Thank you for joining the waitlist. We'll be in touch soon.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form 
                action="https://e637ebe2.sibforms.com/serve/MUIFAC3iFqxXqjKrfXnMp4o2fVuxfMwnHcvh3YYqcWGv8LBIFreVgGYtekalYcfMHgSOH-2gV-5cWXmYr-hzWO9goSPjm2l3Xe7GUv9pw59INDG8hIYFuBZc6d_1_mRVShgvYMBSkggqastsQL5ENYke7vs1k-HbbUbKvEzNmsWUmce9UIYdPGVG9g6vbPLS88lL706C_yzg0roz9w==" 
                method="POST" 
                onSubmit={handleSubscribe}
                className="max-w-md mx-auto flex flex-col gap-4"
              >
                <input 
                  type="email" 
                  name="EMAIL"
                  placeholder="Enter your email address" 
                  required
                  disabled={formStatus === 'loading'}
                  className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-base placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all disabled:opacity-50"
                />
                {/* Brevo hidden anti-spam and locale fields */}
                <input type="text" name="email_address_check" defaultValue="" className="hidden" />
                <input type="hidden" name="locale" defaultValue="en" />
                
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-black text-white rounded-full px-8 py-5 text-base font-medium transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center"
                >
                  {formStatus === 'loading' ? 'Subscribing...' : 'I Want to Be First'}
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            )}

            <div className="mt-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
              <span>We'll never sell your data</span>
              <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Unsubscribe anytime</span>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto"
        >
          <div className="mb-24 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-medium tracking-tight mb-4">
              Something is coming that was built for exactly how you read.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-semibold tracking-tight flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                VERSE
              </div>
              <p className="text-gray-400 max-w-xs">
                Built for the way you actually study. Revealed soon.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manifesto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm gap-6">
            <p>© 2026 Verse App. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Video size={20} /></a>
            </div>
          </div>
          
          <div className="mt-12 text-xs text-gray-600 max-w-4xl leading-relaxed">
            Verse is a technology company, not a church or religious institution. Information provided on this website is for educational purposes only. The app is currently in early access and features described may change prior to full release. By joining the waitlist, you agree to receive occasional updates about our progress.
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
