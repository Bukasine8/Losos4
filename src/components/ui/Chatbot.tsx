
"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { X, Send, Bot, User, MessageCircle, ChevronDown } from "lucide-react";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    // Cast to any to avoid TS errors with potentially mismatched types in the SDK
    // but trusting the runtime values are present
    const chatHelpers = useChat() as any;
    const {
        messages = [],
        input = "",
        handleInputChange = () => { },
        handleSubmit = (e: React.FormEvent) => e.preventDefault(),
        isLoading = false
    } = chatHelpers || {};

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            {/* Toggle Button - always visible, toggles icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-36 md:bottom-24 right-6 z-40 flex items-center justify-center transition-all duration-300",
                    "w-14 h-14 md:w-16 md:h-16 rounded-full bg-losos-blue text-white shadow-lg",
                    "hover:scale-110 active:scale-95 border-2 border-white",
                    "animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500",
                    isOpen ? "rotate-90 bg-red-500" : "rotate-0"
                )}
                aria-label={isOpen ? "Close Chat" : "Open AI Assistant"}
            >
                {isOpen ? (
                    <X className="w-8 h-8" />
                ) : (
                    // Modern Abstract AI Icon
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-20 md:bottom-44 right-6 z-39 flex flex-col transition-all duration-500 origin-bottom-right",
                    "w-[90vw] md:w-[400px] h-[500px] max-h-[60vh] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-20 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="bg-losos-dark text-white p-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-losos-blue/20 rounded-full flex items-center justify-center border border-white/10">
                            {/* Header Icon */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="w-6 h-6 text-losos-blue"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Losos4 Assistant</h3>
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Online
                            </p>
                        </div>
                    </div>
                    {/* Header close button (optional since we have the FAB, but good for UX) */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <ChevronDown className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {(!messages || messages.length === 0) && (
                        <div className="text-center text-gray-500 mt-8">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="w-12 h-12 mx-auto mb-3 opacity-20"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                            </svg>
                            <p className="text-sm">Hello! I am the Losos4 AI Assistant.</p>
                            <p className="text-xs mt-1">Ask me about our engineering services, projects, or how to contact us.</p>
                        </div>
                    )}

                    {messages && messages.map((m: any) => (
                        <div
                            key={m.id}
                            className={cn(
                                "flex w-full",
                                m.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "max-w-[80%] rounded-2xl p-3 text-sm flex gap-3",
                                    m.role === "user"
                                        ? "bg-losos-blue text-white rounded-br-none"
                                        : "bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none"
                                )}
                            >
                                <span className="shrink-0 mt-1">
                                    {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-losos-blue" />}
                                </span>
                                <div>
                                    {m.content}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start w-full">
                            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-4 shadow-sm flex items-center gap-2">
                                <Bot className="w-4 h-4 text-losos-blue" />
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 shrink-0">
                    <div className="flex gap-2">
                        <input
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Type a message..."
                            className="flex-1 bg-gray-100 border-0 rounded-full px-4 text-sm focus:ring-2 focus:ring-losos-blue focus:outline-none"
                        />
                        <Button
                            type="submit"
                            size="sm"
                            className="rounded-full w-10 h-10 p-0 flex items-center justify-center shrink-0"
                            disabled={isLoading || !input?.trim()}
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                    <p className="text-[10px] text-center text-gray-400 mt-2">
                        AI can make mistakes. Verify important info.
                    </p>
                </form>
            </div>
        </>
    );
}
