"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log(contactData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };
  return (
    <div className="w-full mx-auto mt-4 px-0 md:px-6 lg:px-24 py-8 ">
      <main className="relative px-0 md:px-12 pt-4 pb-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Still Have Questions? Contact Us
            <span className="block text-3xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Address Your Enquiry Below
            </span>
          </h1>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 px-8 py-20 mt-20 rounded-2xl bg-zinc-800/50"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, name: e.target.value }));
              }}
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, subject: e.target.value }))
              }
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5
                   text-white transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-sky-500/40"
              required
            />
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button
                type="submit"
                className="w-full relative flex justify-center gap-2 items-center group overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 
                 px-4 py-3.5 text-sm font-medium text-white shadow-lg
                 transition-all duration-200 hover:from-sky-400 hover:to-blue-500
                 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Submit</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Your message sent to SafeReport team
                </AlertDialogTitle>
                <AlertDialogDescription>
                  You will hear from us within 24 hours.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </main>
    </div>
  );
}
