"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const t = useTranslations("Languages");

  const onValueChange = (value: string) => {
    startTransition(() => {
      router.replace(`/${value}`);
    });
  };

  return (
    <>
      <Select
        defaultValue={localActive}
        onValueChange={onValueChange}
        disabled={isPending}
      >
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t("name")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
