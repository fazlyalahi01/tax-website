"use server";
import { Resend } from "resend";

export type TContactFormData = {
  name: string;
  email: string;
  message: string;
  subject: string;
  phone?: string;
};
export const sendEmail = async (data: TContactFormData) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const sent = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "zillurincometaxnyc@gmail.com",
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    });
    return sent;
  } catch (error) {
    throw error;
  }
};
