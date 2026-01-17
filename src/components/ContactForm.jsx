import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

const interestOptions = [
  "Branding",
  "UI/UX Design",
  "Web Design",
  "Marketing",
  "Social Media",
  "Content",
  "App Development",
];

const budgetOptions = [
  "₹50k - ₹1L",
  "₹1L - ₹2L",
  "₹2L - ₹5L",
  "₹5L - ₹10L",
  "₹10L+",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interests: [],
    budget: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.interests.length) newErrors.interests = "Pick at least one";
    if (!formData.budget) newErrors.budget = "Select a budget";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const toggleInterest = (value) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(value);
      const interests = exists
        ? prev.interests.filter((item) => item !== value)
        : [...prev.interests, value];
      return { ...prev, interests };
    });
    if (errors.interests) {
      setErrors((prev) => ({ ...prev, interests: "" }));
    }
  };

  const setBudget = (value) => {
    setFormData((prev) => ({ ...prev, budget: value }));
    if (errors.budget) {
      setErrors((prev) => ({ ...prev, budget: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-[#E7E0D2] p-8 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
          <CheckCircle className="h-7 w-7 text-[#B3A380]" />
        </div>
        <h3 className="text-2xl font-semibold text-secondary">Message Sent!</h3>
        <p className="mt-2 text-sm text-secondary/70">
          Thank you for reaching out. We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm text-secondary">
          Full name
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter name here"
            className="contact-input w-full rounded-full border border-secondary/15 bg-white/90 px-4 py-3 text-sm text-secondary placeholder:text-secondary/40 shadow-sm focus:border-[#B3A380] focus:outline-none focus:ring-2 focus:ring-[#B3A380]/25"
          />
          {errors.fullName && (
            <p className="text-xs text-secondary/70">{errors.fullName}</p>
          )}
        </label>
        <label className="space-y-2 text-sm text-secondary">
          Company name
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            className="contact-input w-full rounded-full border border-secondary/15 bg-white/90 px-4 py-3 text-sm text-secondary placeholder:text-secondary/40 shadow-sm focus:border-[#B3A380] focus:outline-none focus:ring-2 focus:ring-[#B3A380]/25"
          />
        </label>
        <label className="space-y-2 text-sm text-secondary">
          Your email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="hello@brandview.in"
            className="contact-input w-full rounded-full border border-secondary/15 bg-white/90 px-4 py-3 text-sm text-secondary placeholder:text-secondary/40 shadow-sm focus:border-[#B3A380] focus:outline-none focus:ring-2 focus:ring-[#B3A380]/25"
          />
          {errors.email && <p className="text-xs text-secondary/70">{errors.email}</p>}
        </label>
        <label className="space-y-2 text-sm text-secondary">
          Your phone number
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="contact-input w-full rounded-full border border-secondary/15 bg-white/90 px-4 py-3 text-sm text-secondary placeholder:text-secondary/40 shadow-sm focus:border-[#B3A380] focus:outline-none focus:ring-2 focus:ring-[#B3A380]/25"
          />
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-secondary">I am interested in...</p>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((option) => {
            const active = formData.interests.includes(option);
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleInterest(option)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  active
                    ? "bg-secondary text-secondary-foreground shadow-sm"
                    : "contact-chip border border-secondary/20 bg-white/80 text-secondary/70 hover:border-secondary/40 hover:text-secondary"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {errors.interests && (
          <p className="text-xs text-secondary/70">{errors.interests}</p>
        )}
      </div>

      <div className="space-y-3">
        <p className="text-sm text-secondary">Project budget</p>
        <div className="flex flex-wrap gap-3">
          {budgetOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBudget(option)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                formData.budget === option
                  ? "bg-secondary text-secondary-foreground shadow-sm"
                  : "contact-chip border border-secondary/20 bg-white/80 text-secondary/70 hover:border-secondary/40 hover:text-secondary"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {errors.budget && <p className="text-xs text-secondary/70">{errors.budget}</p>}
      </div>

      <label className="space-y-2 text-sm text-secondary">
        Tell us more about your project
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share project goals, timelines, and expectations..."
          className="contact-input w-full rounded-3xl border border-secondary/15 bg-white/90 px-4 py-3 text-sm text-secondary placeholder:text-secondary/40 shadow-sm focus:border-[#B3A380] focus:outline-none focus:ring-2 focus:ring-[#B3A380]/25"
        />
        {errors.message && <p className="text-xs text-secondary/70">{errors.message}</p>}
      </label>

      <Button type="submit" className="rounded-full bg-primary px-6 text-primary-foreground">
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
