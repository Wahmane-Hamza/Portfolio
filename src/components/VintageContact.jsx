import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Instagram, Github, Linkedin, Send, Copy, Check, Loader2, ArrowUpRight } from 'lucide-react';

export default function VintageContact() {
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
          _subject: `New Explorer Dispatch from ${formData.name}`,
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setStatusMessage({
          type: 'success',
          text: 'Dispatch received! Hamza will read and reply to your letter shortly.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('API submission failed');
      }
    } catch (err) {
      const mailtoLink = `mailto:${personal.email}?subject=Dispatch from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
      window.location.href = mailtoLink;
      setStatusMessage({
        type: 'info',
        text: 'Opening your mail client to send the dispatch...',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 8000);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#f5ecd3] border-t-2 border-[#b8860b]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2">
          <span className="font-cinzel text-xs uppercase tracking-[0.2em] font-bold text-[#8b261e]">
            Postal Dispatch & Inquiries
          </span>
          <h2 className="font-script text-4xl sm:text-6xl text-[#2b1c11]">
            Send a Letter to Hamza
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#5e432b] max-w-xl mx-auto">
            Whether for technical collaboration, software engineering roles, or route recommendations across Morocco.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#b8860b] to-transparent mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Channels Styled as Antique Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Instagram Card */}
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="parchment-sheet p-5 rounded-2xl border border-[#c59b27]/40 flex items-center justify-between group hover:-translate-y-1 transition-transform block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#8b261e]/10 border border-[#8b261e]/30 flex items-center justify-center text-[#8b261e] group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-sm text-[#2b1c11] group-hover:text-[#8b261e] transition-colors">
                    Instagram Adventures
                  </h3>
                  <p className="font-serif text-xs text-[#7c5737]">@wahmane.hamza</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#8b261e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Direct Email Card */}
            <div className="parchment-sheet p-5 rounded-2xl border border-[#c59b27]/40 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b8860b]/15 border border-[#b8860b]/40 flex items-center justify-center text-[#8b261e]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-sm text-[#2b1c11]">Direct Mail</h3>
                  <p className="font-typewriter text-xs text-[#7c5737] truncate max-w-[170px] sm:max-w-none">
                    {personal.email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-[#f6ebd0] hover:bg-[#eadabe] text-[#4a3320] border border-[#b8860b]/30 transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-[#8b261e]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub & LinkedIn Row */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="parchment-sheet p-3.5 rounded-xl border border-[#c59b27]/40 flex items-center gap-2.5 text-[#2b1c11] hover:text-[#8b261e] transition-colors"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span className="font-cinzel text-xs font-bold truncate">GitHub Archive</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="parchment-sheet p-3.5 rounded-xl border border-[#c59b27]/40 flex items-center gap-2.5 text-[#2b1c11] hover:text-[#8b261e] transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-[#8b261e]" />
                <span className="font-cinzel text-xs font-bold truncate">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right: The Letter Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="parchment-sheet p-6 sm:p-8 rounded-3xl border-2 border-[#c59b27]/60 shadow-xl space-y-4"
            >
              <h3 className="font-script text-3xl text-[#2b1c11] mb-2">
                Write a Dispatch
              </h3>

              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-[#5e432b] mb-1 font-semibold">
                  Sender's Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Captain Nemo / Fellow Cyclist"
                  className="w-full bg-[#fcf8ec] border border-[#b8860b]/40 rounded-xl px-4 py-2.5 text-sm text-[#2b1c11] placeholder-[#a69279] focus:outline-none focus:border-[#8b261e] font-serif transition-colors"
                />
              </div>

              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-[#5e432b] mb-1 font-semibold">
                  Return Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. traveler@domain.com"
                  className="w-full bg-[#fcf8ec] border border-[#b8860b]/40 rounded-xl px-4 py-2.5 text-sm text-[#2b1c11] placeholder-[#a69279] focus:outline-none focus:border-[#8b261e] font-serif transition-colors"
                />
              </div>

              <div>
                <label className="block font-cinzel text-xs uppercase tracking-wider text-[#5e432b] mb-1 font-semibold">
                  Your Letter / Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, proposal, or travel thoughts here..."
                  className="w-full bg-[#fcf8ec] border border-[#b8860b]/40 rounded-xl px-4 py-2.5 text-sm text-[#2b1c11] placeholder-[#a69279] focus:outline-none focus:border-[#8b261e] font-serif resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-cinzel text-xs font-bold tracking-widest text-[#fffcf4] bg-gradient-to-r from-[#8b261e] to-[#701a14] hover:from-[#a02f26] hover:to-[#851e17] disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-md shadow-[#8b261e]/30 uppercase cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sealing & Sending Dispatch...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Letter to Hamza</span>
                  </>
                )}
              </button>

              {statusMessage && (
                <div className={`p-3.5 rounded-xl text-xs font-serif text-center flex items-center justify-center gap-2 ${
                  statusMessage.type === 'success'
                    ? 'bg-[#8b261e]/10 border border-[#8b261e]/30 text-[#8b261e]'
                    : 'bg-[#b8860b]/10 border border-[#b8860b]/30 text-[#5e432b]'
                }`}>
                  <Check className="w-4 h-4 text-[#8b261e] shrink-0" />
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
