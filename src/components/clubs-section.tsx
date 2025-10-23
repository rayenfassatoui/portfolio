"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export function ClubsSection() {
  const { language } = useLanguage();
  const clubsData = language === "fr" && DATA.clubsFr ? DATA.clubsFr : DATA.clubs;

  return (
    <section id="clubs">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {language === "en" ? "Clubs & Activities" : "Clubs & Activités"}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {language === "en" ? "Community Involvement" : "Engagement Communautaire"}
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {language === "en" 
                  ? "I actively participate in various clubs and organizations, contributing to community service and professional development."
                  : "Je participe activement à divers clubs et organisations, contribuant au service communautaire et au développement professionnel."}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-8 max-w-[800px] mx-auto">
          {clubsData.map((club, id) => (
            <BlurFade
              key={club.name}
              delay={BLUR_FADE_DELAY * 18 + id * 0.05}
            >
              <div className="space-y-4">
                <ResumeCard
                  logoUrl={club.logoUrl}
                  altText={club.name}
                  title={club.name}
                  subtitle={club.role}
                  period={`${club.start} - ${club.end ?? (language === "en" ? "Present" : "Présent")}`}
                  description={club.description}
                />
                
                {club.events && club.events.length > 0 && (
                  <div className="pl-4 space-y-3">
                    <h3 className="text-lg font-semibold">
                      {language === "en" ? "Events" : "Événements"}
                    </h3>
                    <div className="grid gap-3">
                      {club.events.map((event, eventId) => (
                        <BlurFade
                          key={event.title}
                          delay={BLUR_FADE_DELAY * 19 + eventId * 0.05}
                        >
                          <div className="rounded-lg border bg-card p-4">
                            <div className="flex items-start gap-4">
                              {event.image && (
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="h-20 w-20 rounded-md object-cover"
                                />
                              )}
                              <div className="flex flex-col flex-1 space-y-1">
                                <h4 className="font-medium">{event.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {event.date}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {event.description}
                                </p>
                                {event.url && (
                                  <div className="flex flex-row flex-wrap items-start gap-1">
                                    <Link href={event.url} target="_blank" rel="noopener noreferrer">
                                      <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                                        {language === "en" ? "View Event" : "Voir l'événement"}
                                      </Badge>
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </BlurFade>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}