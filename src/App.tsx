import React, { useEffect, useState } from 'react';
import { Instagram, Twitter, Video, Search, TextSelect, BookOpen, Compass, PenTool, Brain, Mic, Map, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
              <a href="#problem" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">The Problem</a>
              <a href="#solution" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">The Solution</a>
              <a href="#community" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#waitlist" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">Log in</a>
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
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-8">
                <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">Now in early access</span>
              </div>
              
              <h1 className="text-[56px] md:text-[80px] font-medium leading-[1.05] tracking-tight text-balance mb-8">
                Your Bible.<br />
                Your Thoughts.<br />
                Finally in One Place.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed">
                The Bible app built for people who actually write notes — and want to find them again.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#waitlist"
                  className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-4 text-base font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  Join the Waitlist <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] bg-gray-50 rounded-[32px] overflow-hidden flex items-center justify-center border border-gray-100">
              {/* Abstract minimalist illustration replacing the vintage engraving */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              <div className="relative z-10 w-64 h-64 border border-gray-200 rounded-full flex items-center justify-center bg-white shadow-sm">
                <div className="w-48 h-48 border border-gray-100 rounded-full flex items-center justify-center">
                  <BookOpen size={48} strokeWidth={1} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Section 2: Pain Points (Split Layout) */}
        <section id="problem" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-4">The Problem</div>
                <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
                  Sound familiar?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                  If you've ever opened a Bible app and felt something was missing — you were right.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { icon: Search, title: "Your notes are buried forever", desc: "You wrote something powerful in a reading plan 6 months ago. Now it's gone — buried under 10 completed plans with no way to search for it." },
                { icon: TextSelect, title: "You can only highlight the whole verse", desc: "One word in that verse changed everything. But the app forces you to mark the entire verse. The moment gets diluted." },
                { icon: BookOpen, title: "Your journal lives in a different app", desc: "Every time you want to reflect, you leave the Bible app and open Notes. Your study is fragmented across 3 different tools." },
                { icon: Compass, title: "No one asked what you actually believe yet", desc: "You're just starting to explore faith. You have real questions like 'Who is Jesus?' But the app gives you the same plan catalog as everyone else." },
                { icon: PenTool, title: "It doesn't feel like your Bible", desc: "On a physical Bible, you write in the margins, underline words, make it yours. Digital Bibles feel like reading someone else's copy." }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-[24px] p-8 md:p-10 flex gap-6 items-start border border-gray-100 transition-colors hover:bg-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                    <item.icon size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Solution (Dark Mode) */}
        <section id="solution" className="py-32 bg-[#111] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
              <div className="lg:col-span-6">
                <h2 className="text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-tight mb-6">
                  Introducing Verse.
                </h2>
                <p className="text-xl text-gray-400">
                  Your Bible's second brain.
                </p>
              </div>
              <div className="lg:col-span-6 flex justify-start lg:justify-end">
                <a href="#waitlist" className="bg-white text-black rounded-full px-8 py-4 text-sm font-medium transition-transform hover:scale-105">
                  See Our Offerings
                </a>
              </div>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 snap-x">
              {[
                { icon: Brain, title: "Everything you've ever written, instantly findable", desc: "One searchable feed of every highlight, note, voice memo, and reflection — across every plan, every book, every translation. Forever." },
                { icon: Mic, title: "Journal while you read — without leaving", desc: "Speak your thoughts out loud. Use HEAR or SOAP right inside the app. AI captures, transcribes, and organises everything automatically." },
                { icon: Map, title: "A reading path built around your real questions", desc: "Tell us where you are spiritually. We build a personalised reading path from your actual questions — not a generic plan everyone else is doing." }
              ].map((item, i) => (
                <div key={i} className="min-w-[320px] md:min-w-[400px] bg-[#1A1A1A] rounded-[32px] p-10 snap-start border border-white/5 flex flex-col">
                  <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center mb-8 border border-white/10">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed mt-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Social Proof */}
        <section id="community" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              You're not the only one.
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our early community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "I have 4 years of notes trapped in YouVersion plans. I'd switch apps tomorrow if someone solved this.",
              "I've been using GoodNotes alongside my Bible app just to write in the margins. It's embarrassing that no app has fixed this.",
              "I became a Christian last year. Every plan felt like it was made for someone who already knew everything. I just had questions."
            ].map((quote, i) => (
              <div key={i} className="bg-gray-50 rounded-[24px] p-10 border border-gray-100 flex flex-col">
                <div className="text-6xl font-serif text-gray-300 leading-none mb-6">"</div>
                <p className="text-lg text-gray-800 leading-relaxed mb-8 flex-grow">
                  {quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="text-sm font-medium text-gray-600">Early Member</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Waitlist CTA */}
        <section id="waitlist" className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-gray-50 rounded-[40px] p-12 md:p-24 text-center border border-gray-100">
            <h2 className="text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-tight mb-6">
              Be first.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              We're building Verse in public — with our waitlist. Your frustrations become our features. Sign up and we'll send you one question a week about what matters most to you.
            </p>

            <form action="https://formspree.io/f/placeholder" method="POST" className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email address" 
                required
                className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-base placeholder:text-gray-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
              />
              <button 
                type="submit"
                className="w-full bg-black text-white rounded-full px-8 py-5 text-base font-medium transition-transform hover:scale-[1.02]"
              >
                Reserve My Spot
              </button>
            </form>

            <div className="mt-8 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
              <span>We'll never sell your data</span>
              <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-semibold tracking-tight flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                VERSE
              </div>
              <p className="text-gray-400 max-w-xs">
                The Bible app built for people who actually write notes.
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
        </div>
      </footer>
    </div>
  );
}
