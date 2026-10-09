import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, Twitter, Instagram, ArrowUpRight, Loader2 } from 'lucide-react';

export default function Contact() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent directly to Hamza.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('API submission failed');
      }
    } catch (err) {
      // Fallback to mailto if network error or adblocker blocks AJAX
      const mailtoLink = `mailto:${personal.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.location.href = mailtoLink;
      setStatusMessage({
        type: 'info',
        text: 'Opening your email client to send the message...',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 7000);
    }
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/5 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Whether you have a technical opportunity, a project to collaborate on, or just want to discuss software architecture, my inbox is open!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn Card */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">
                    LinkedIn Profile
                  </h3>
                  <p className="text-xs text-slate-400">hamza-wahmane</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* GitHub Card */}
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base group-hover:text-cyan-300 transition-colors">
                    GitHub Profile
                  </h3>
                  <p className="text-xs text-slate-400">Wahmane-Hamza</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Email Card with Copy button */}
            <div className="glass-panel p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Direct Email</h3>
                  <p className="text-xs text-slate-400 font-mono truncate max-w-[180px] sm:max-w-none">
                    {personal.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-slate-300 hover:text-white border border-white/5 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Other socials */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-dark-900/60 border border-white/5 hover:border-cyan-500/30 text-slate-400 hover:text-cyan-400 text-xs font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter / X</span>
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-dark-900/60 border border-white/5 hover:border-rose-500/30 text-slate-400 hover:text-rose-400 text-xs font-medium flex items-center justify-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>

          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4 relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Smith"
                  className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full bg-dark-900/80 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-dark-900 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {statusMessage && (
                <div className={`p-3.5 rounded-xl text-xs font-mono text-center flex items-center justify-center gap-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                    : 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-300'
                }`}>
                  {statusMessage.type === 'success' ? (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
