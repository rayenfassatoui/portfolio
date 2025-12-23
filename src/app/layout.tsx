import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "@fontsource/inter";
import "@fontsource/playfair-display";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name} - Web Developer Portfolio`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/metatag.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Portfolio`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} - Web Developer Portfolio`,
    card: "summary_large_image",
    images: ["/metatag.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
  keywords: ["Web Developer", "Solutions Developer", "React", "Node.js", "Portfolio", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-full mx-auto overflow-x-hidden",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <TooltipProvider delayDuration={0}>
              <SmoothScroll>
                <div className="relative flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-1">{children}</main>
                </div>
              </SmoothScroll>
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
