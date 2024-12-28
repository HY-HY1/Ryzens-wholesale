"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFormValid = () =>
    Object.values(formData).every((value) => value.trim() !== '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid()) {
      alert('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate delay (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    window.location.href = '/confirmation';
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        placeholder="Enter your name"
        className="mb-4"
        value={formData.name}
        onChange={handleChange}
      />

      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="mb-4"
        value={formData.email}
        onChange={handleChange}
      />

      <Label htmlFor="company">Company</Label>
      <Input
        id="company"
        type="text"
        placeholder="Enter your company name"
        className="mb-4"
        value={formData.company}
        onChange={handleChange}
      />

      <Label htmlFor="message">Message</Label>
      <textarea
        id="message"
        placeholder="Enter your message"
        className="mb-4"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <Button
        type="submit"
        className="mt-4"
        disabled={!isFormValid() || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};

export default ContactForm;
