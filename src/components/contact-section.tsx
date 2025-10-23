"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ContactSection() {
  const { language } = useLanguage();

  const contactText = {
    en: {
      badge: "Contact",
      title: "Get in Touch",
      description: (
        <>
          Want to chat? Just send me a DM on{" "}
          <Link
            className="text-blue-500"
            href="https://www.linkedin.com/in/rayenfassatoui/"
          >
            LinkedIn{" "}
          </Link>
          and I&apos;ll respond as soon as possible 🙂
        </>
      ),
    },
    fr: {
      badge: "Contact",
      title: "Entrer en Contact",
      description: (
        <>
          Vous voulez discuter ? Envoyez-moi simplement un message sur{" "}
          <Link
            className="text-blue-500"
            href="https://www.linkedin.com/in/rayenfassatoui/"
          >
            LinkedIn{" "}
          </Link>
          et je vous répondrai dès que possible 🙂
        </>
      ),
    },
  };

  const content = language === "fr" ? contactText.fr : contactText.en;

  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {content.badge}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {content.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {content.description}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
