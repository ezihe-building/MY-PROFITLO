import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

export function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "👋 Hi, I'm Richard's AI Assistant. Ask me anything about Richard, his projects or his services." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chips = [
    "Who is Richard?",
    "What services does he offer?",
    "Show his projects",
    "How do I hire him?"
  ];

  const getResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("who")) {
      return "EZIHE CHIGORZIRIM (Richard) is the founder of ZENITH LABS. He is a Full Stack Developer, UI/UX Designer, and AI Workflow Builder based in Nigeria.";
    }
    if (q.includes("service")) {
      return "He offers Website Development, Full Stack Apps, Telegram/WhatsApp Bots, Dashboard Systems, and Custom AI Integrations.";
    }
    if (q.includes("project")) {
      return "Some of his notable projects include ZENITH DASHBOARD, REAPER BOT (WhatsApp automation), and CIPHER UI (Design System).";
    }
    if (q.includes("hire") || q.includes("contact")) {
      return "You can hire him by reaching out via WhatsApp at +2348012345678 or emailing richard@zenithlabs.dev.";
    }
    return "I am a simple AI assistant programmed to answer FAQs about Richard. Please use the contact section to reach him directly for custom inquiries.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: getResponse(text) }]);
      setIsTyping(false);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 w-14 h-14 rounded-full bg-black border border-primary text-primary flex items-center justify-center glow-box hover:scale-110 transition-all z-40 ${isOpen ? 'hidden' : 'block'}`}
      >
        <span className="text-2xl">𓁹</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] h-[500px] glass-card border border-primary/50 rounded-lg flex flex-col overflow-hidden z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="bg-primary/10 border-b border-primary/30 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">𓁹</span>
                <span className="text-white font-mono text-sm tracking-widest">ZENITH AI ASSISTANT</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm font-mono ${
                    msg.role === 'user' 
                      ? 'bg-primary/20 border border-primary/50 text-white' 
                      : 'bg-white/5 border border-white/10 text-gray-300'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: "0.2s"}} />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: "0.4s"}} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chips */}
            <div className="p-2 flex flex-wrap gap-2 border-t border-white/5 bg-black/50">
              {chips.map((chip, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(chip)}
                  className="text-xs px-2 py-1 bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 rounded text-gray-300 hover:text-white transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-black border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 font-mono"
              />
              <button 
                onClick={() => handleSend(input)}
                className="w-10 flex justify-center items-center bg-primary/20 hover:bg-primary text-primary hover:text-white rounded border border-primary/50 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
