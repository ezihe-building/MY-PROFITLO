import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

const chips = [
  "Who is Richard?",
  "What services does he offer?",
  "Show his projects",
  "How do I hire him?"
];

const getResponse = (query: string) => {
  const q = query.toLowerCase();
  if (q.includes("who") || q.includes("richard")) {
    return "EZIHE CHIGORZIRIM (Richard) is the founder of ZENITH LABS. Full Stack Developer, UI/UX Designer, and AI Workflow Builder based in Nigeria.";
  }
  if (q.includes("service") || q.includes("offer")) {
    return "He offers Website Development, Full Stack Apps, Telegram/WhatsApp Bots, Dashboard Systems, Portfolio Sites, and AI Integrations.";
  }
  if (q.includes("project")) {
    return "Notable projects: ZENITH DASHBOARD (AI analytics), REAPER BOT (WhatsApp automation), CIPHER UI (design system), and NEXUS PORTFOLIO.";
  }
  if (q.includes("hire") || q.includes("contact")) {
    return "Reach him via WhatsApp (+2348012345678) or email richard@zenithlabs.dev. Available for freelance and collaborations.";
  }
  return "I am Richard's AI Assistant. Ask about his skills, projects, or services. Use the contact section to reach him directly.";
};

export default function FloatingAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "ai", text: "Hi, I'm Richard's AI Assistant. Ask me anything about his work." }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: getResponse(text) }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 w-12 h-12 rounded-full bg-black border border-gray-700 text-white flex items-center justify-center shadow-lg hover:border-[#e63946] hover:text-[#e63946] transition-colors z-40 ${isOpen ? "hidden" : "block"}`}
      >
        <MessageSquare size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-3rem)] h-[480px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            <div className="bg-black p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-[#e63946] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e63946] sharingan-spin" />
                </div>
                <span className="text-white font-medium text-sm">ZENITH AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 border border-gray-100 shadow-sm"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-2 flex flex-wrap gap-1.5 border-t border-gray-100 bg-white">
              {chips.map((chip, i) => (
                <button key={i} onClick={() => handleSend(chip)}
                  className="text-xs px-2 py-1 bg-gray-100 hover:bg-[#e63946] hover:text-white rounded-full text-gray-600 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e63946]/20"
              />
              <button onClick={() => handleSend(input)}
                className="w-9 h-9 flex justify-center items-center bg-black hover:bg-[#e63946] text-white rounded-full transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
