"use client";
import { cn } from "@/lib/utils";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import ContactForm from "../contact/ContactForm";
import { buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const StartWithUs: React.FC = () => {
  return (
    <div className="bg-gray-100 md:py-16 py-8 px-3 xl:px-0">
      <div className="container-x">
        <div className="md:flex justify-between gap-12 items-center">
          <h1 className="md:text-4xl text-3xl font-extrabold text-title pb-1 flex-shrink-0">
            Want to work with us?
          </h1>
          <p className="text-description py-4">
            If you are interested in working with us, please fill out the form.
            One of our team members will get in touch with you shortly.
          </p>
          <div className="flex-shrink-0">
            <Dialog>
              <DialogTrigger>
                <span
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                      className:
                        "hover:bg-primary hover:text-white transition duration-500 border-2 border-primary",
                    })
                  )}
                >
                  Contact Us →
                </span>
              </DialogTrigger>
              <DialogContent className="bg-white px-4 pt-12 pb-8">
                <VisuallyHidden asChild>
                  <DialogTitle className="text-2xl font-bold text-title pb-1">
                    Get a free consultation
                  </DialogTitle>
                </VisuallyHidden>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartWithUs;
