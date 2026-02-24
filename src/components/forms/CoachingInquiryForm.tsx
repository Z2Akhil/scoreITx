"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, User, Mail, Building2, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RollingText } from "@/components/ui/rolling-text";

export default function CoachingInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instituteName: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/coaching-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", instituteName: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await res.json();
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit form");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(8,112,184,0.07)] border border-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="relative z-10">
        <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Elevate Your Coaching</h3>
            <p className="text-slate-500">Partner with ScoreIT and transform how you deliver assessments.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@institute.com"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Institute Name</label>
                    <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            required
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleChange}
                            placeholder="Elite Coaching Center"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Message (Optional)</label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group/submit w-full py-4 bg-[#1852CC] hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        <RollingText text="Processing..." groupHoverClass="group-hover/submit" />
                    </>
                ) : status === "success" ? (
                    <>
                        <CheckCircle2 size={20} />
                        <RollingText text="Form Sent Successfully!" groupHoverClass="group-hover/submit" />
                    </>
                ) : (
                    <>
                        <RollingText text="Submit Inquiry" groupHoverClass="group-hover/submit" />
                        <Send size={18} />
                    </>
                )}
            </button>

            <AnimatePresence>
                {status === "error" && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center text-red-500 text-sm font-medium mt-4"
                    >
                        {errorMessage}
                    </motion.p>
                )}
            </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
