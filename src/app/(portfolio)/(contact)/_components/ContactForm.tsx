"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "../_actions/contact";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? "Sending..." : "Submit"}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(sendContactEmail, {
    sucess: false,
    error: { name: [""], email: [""], message: [""] },
  });
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.sucess === true) {
      ref.current?.reset();
      toast({
        title: "Message Sent!",
        description:
          "Thanks for reaching out! Your message has been successfully sent. I'll get back to you as soon as possible.",
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction} ref={ref} className="space-y-8 w-full max-w-xl">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
        {state?.error?.name && (
          <div className="text-destructive">{state.error.name}</div>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          required
        />
        {state?.error?.email && (
          <div className="text-destructive">{state.error.email}</div>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Let me know what you have in mind"
          className="resize-none"
          required
        />
        {state?.error?.message && (
          <div className="text-destructive">{state.error.message}</div>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
