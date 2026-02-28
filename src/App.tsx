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
              <a href="#solution" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">Something's Coming</a>
              <a href="#community" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-white rounded-full transition-all">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#waitlist" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">Log In</a>
            <a
              href="#waitlist"
              className="bg-black text-white rounded-full px-6 py-2.5 text-sm font-medium transition-transform hover:scale-105"
            >
              Get Early Access
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
              
              <h1 className="text-[40px] md:text-[48px] font-medium leading-[1.1] tracking-tight text-balance mb-8">
                You've been using<br />
                the wrong Bible app<br />
                your whole life.
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed">
                You just didn't know there was a better way. Until now.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="#waitlist"
                  className="w-full sm:w-auto bg-black text-white rounded-full px-8 py-4 text-base font-medium flex items-center justify-center gap-2 transition-transform hover:scale-105"
                >
                  I Want to Know More <ArrowRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] bg-gray-50 rounded-[32px] overflow-hidden border border-gray-100">
              <img 
                src="https://picsum.photos/seed/cathedral/800/1200?grayscale" 
                alt="Premium architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
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
                  If you've ever opened a Bible app and felt something was missing, you were right.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                { icon: Search, title: "Your notes are buried forever", desc: "You wrote something powerful 6 months ago. It's gone, buried inside a completed plan with no way to ever search for it." },
                { icon: PenTool, title: "You can only highlight the whole verse", desc: "One word changed everything for you. But the app marks the entire verse. That moment gets lost every time." },
                { icon: BookOpen, title: "Your journal lives in a different app", desc: "Every time you want to reflect, you leave and open Notes. Your study is split across three tools." },
                { icon: Compass, title: "No one asked what you actually believe yet", desc: "You have real questions like \"Who is Jesus?\" But the app gives you the same plan catalog as everyone else. You are not everyone else." },
                { icon: PenTool, title: "It doesn't feel like your Bible", desc: "On a physical Bible you write in the margins, underline words, make it yours. Digital Bibles feel like someone else's copy." }
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

        {/* Section 3: Something Is Coming (Dark Mode) */}
        <section id="solution" className="py-32 bg-[#111] text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
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
          </div>
        </section>

        {/* Section 4: Social Proof */}
        <section id="community" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-4">Community</div>
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.1] tracking-tight mb-6">
              You're not the only one.
            </h2>
            <p className="text-lg text-gray-600">
              Others felt it too. Here's what they said.
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
            <div className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-6">Be First to Know</div>
            <h2 className="text-[40px] md:text-[56px] font-medium leading-[1.05] tracking-tight mb-6">
              The reveal is coming.<br />
              You should be there when it happens.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Join the list and we'll send you one clue a week about what we're building. When we're ready to show the world, you'll see it first.
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
                I Want to Be First
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
        </div>
      </footer>
    </div>
  );
}
