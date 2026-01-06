"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    try {
      console.log("Form submitted:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-20">
      <section className="max-w-lg w-full bg-card-bg rounded-2xl shadow-lg p-8 border border-foreground/10">
        <h1 className="text-3xl font-bold text-accent text-center mb-4">
          Get in Touch
        </h1>

        <p className="text-center text-muted mb-2">Prefer to talk?</p>
        <p className="text-center mb-6">
          Tel:{" "}
          <a
            href="tel:+447700900123"
            className="text-lg font-semibold text-accent hover:text-accent-dark transition"
          >
            07899 957 096
          </a>
        </p>

        <p className="text-center text-muted mb-8">
          Or fill out the form below and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/60 bg-background"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/60 bg-background"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/60 bg-background"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-background py-3 rounded-lg font-semibold hover:bg-accent-dark transition-all duration-300"
          >
            Send Message
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center font-medium mt-4">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
