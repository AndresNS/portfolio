"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail } from "../_actions/contact";
import { Label } from "@/components/ui/label";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";

function SubmitButton({
  text,
  pendingText,
}: {
  text: string;
  pendingText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? pendingText : text}
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
  const t = useTranslations("Index.Contact.form");

  useEffect(() => {
    if (state.sucess === true) {
      ref.current?.reset();
      toast({
        title: t("toast.title"),
        description: t("toast.description"),
      });
    }
  }, [state, toast, t]);

  return (
    <form action={formAction} ref={ref} className="space-y-8 w-full max-w-xl">
      <div>
        <Label htmlFor="name">{t("name.label")}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={t("name.placeholder")}
          required
        />
        {state?.error?.name && (
          <div className="text-destructive">{state.error.name}</div>
        )}
      </div>
      <div>
        <Label htmlFor="email">{t("email.label")}</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={t("email.placeholder")}
          required
        />
        {state?.error?.email && (
          <div className="text-destructive">{state.error.email}</div>
        )}
      </div>
      <div>
        <Label htmlFor="message">{t("message.label")}</Label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("message.placeholder")}
          className="resize-none"
          required
        />
        {state?.error?.message && (
          <div className="text-destructive">{state.error.message}</div>
        )}
      </div>
      <SubmitButton
        text={t("submitButton.default")}
        pendingText={t("submitButton.pending")}
      />
    </form>
  );
}
