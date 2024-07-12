import { sendEmail, TContactFormData } from "@/services/actions";
import React from "react";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      subject: formData.get("subject"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    try {
      const resendResponse = await sendEmail(data as TContactFormData);
      if (resendResponse?.data?.id) {
        toast.success("Form submitted successfully");
      }
    } catch (error) {
      toast.error("Form submission failed");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <textarea
          placeholder="Message"
          name="message"
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        ></textarea>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="  py-2 px-4 border border-transparent text-sm font-medium rounded-sm    text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-500"
        >
          Submit Now →
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
