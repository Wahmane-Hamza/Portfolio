import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Instagram, Github, Linkedin, Send, Copy, Check, X, Loader2 } from 'lucide-react';

export default function DossierContactModal({ isOpen, onClose }) {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  if (!isOpen) return null;

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
          _subject: `Classified Dispatch from ${formData.name}`,
          _template: 'table',
        }),
      });

      const data = await response.json();
      if (response.ok && data.success !== 'false') {
        setStatusMessage({
          type: 'success',
          text: 'Dispatch received. Hamza will inspect your message shortly.',
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
        text: 'Opening your default mail client to deliver dispatch...',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatusMessage(null), 8000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 font-typewriter">
      <div className="case-sheet w-full max-w-xl p-6 sm:p-8 rounded-lg border-2 border-[#1f1c19] shadow-2xl relative">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b-2 border-[#1f1c19] pb-3 mb-5">
          <div>
            <div className="font-bold text-base text-[#1a140e] uppercase">
              CONFIDENTIAL DISPATCH / CONTACT
            </div>
            <div className="text-[11px] text-[#72191a]">
              ENCRYPTED LINE TO OPERATIVE: HAMZA WAHMANE
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#5a4430] hover:text-[#1a140e] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Channel Badges */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-5">
          <div className="p-2.5 bg-[#f6ebd0] border border-[#2b1c11]/30 rounded flex items-center justify-between">
            <div className="truncate">
              <span className="text-[10px] text-[#72191a] block font-bold">DIRECT MAIL:</span>
              <span className="text-xs truncate">{personal.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1 hover:text-[#72191a]"
              title="Copy email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[#f6ebd0] border border-[#2b1c11]/30 rounded flex items-center justify-between hover:border-[#72191a] transition-colors"
          >
            <div>
              <span className="text-[10px] text-[#72191a] block font-bold">INSTAGRAM:</span>
              <span className="text-xs">@wahmane.hamza</span>
            </div>
            <Instagram className="w-4 h-4 text-[#72191a]" />
          </a>
        </div>

        {/* Dispatch Form */}
        <form onSubmit={handleSubmit} className="space-y-3 text-xs">
          <div>
            <label className="block text-[#1a140e] font-bold uppercase mb-1">
              Sender Name / Organization:
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Recruit Agency / Fellow Cyclist"
              className="w-full bg-[#fffdf8] border border-[#2b1c11]/40 rounded p-2 text-xs text-[#1a140e] focus:outline-none focus:border-[#72191a]"
            />
          </div>

          <div>
            <label className="block text-[#1a140e] font-bold uppercase mb-1">
              Return Frequency / Email:
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. contact@domain.com"
              className="w-full bg-[#fffdf8] border border-[#2b1c11]/40 rounded p-2 text-xs text-[#1a140e] focus:outline-none focus:border-[#72191a]"
            />
          </div>

          <div>
            <label className="block text-[#1a140e] font-bold uppercase mb-1">
              Dispatch Content:
            </label>
            <textarea
              rows="4"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your message, opportunity, or travel inquiry..."
              className="w-full bg-[#fffdf8] border border-[#2b1c11]/40 rounded p-2 text-xs text-[#1a140e] focus:outline-none focus:border-[#72191a] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#b82728] hover:bg-[#8a1718] text-[#fffdf8] font-bold text-xs uppercase tracking-wider rounded transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Dispatch...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Transmit Classified Message</span>
              </>
            )}
          </button>

          {statusMessage && (
            <div className="p-3 bg-[#8a1718]/10 border border-[#8a1718]/30 text-[#8a1718] text-xs font-bold text-center rounded">
              {statusMessage.text}
            </div>
          )}
        </form>

      </div>
    </div>
  );
}
