"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting( true );

    try {
      await fetch("https://formsubmit.co/ajax/arturoyz2105@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      setFormData({ name: "", email: "", message: "" });

      toast.success("Mensaje enviado", {
        duration: 2000,
        position: 'bottom-center',
        className: '!bg-fourth-back !text-white'
      });
    } catch {
      alert("Hubo un error al enviar el mensaje");
    }

    setIsSubmitting(false);
  };
  return (
    <div className="w-full max-w-1/2 max-md:max-w-full h-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="name">Your Name</label>
          <input
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 min-h-11 input-custom"
          />
        </div>
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="email">Your Email</label>
          <input
            placeholder="name123@gmail.com"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 min-h-11 input-custom"
          />
        </div>
        <div className="flex flex-col gap-y-4 body-large-r text-body-large-d max-md:text-body-large-m">
          <label htmlFor="message">Your Message</label>
          <textarea
            placeholder="Message"
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 min-h-40 resize-none input-custom"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`h-full min-h-12 rounded-md lead-b text-lead-d max-md:text-lead-m transition-colors duration-300
            ${
              isSubmitting
                ? "bg-linear-to-l from-violet-900 to-fuchsia-900"
                : "bg-gradient-to-l from-violet-600 to-fuchsia-600"
            }`}
          disabled={ isSubmitting }
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        <Toaster  />
      </form>
    </div>
  );
};
