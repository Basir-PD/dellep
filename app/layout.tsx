import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Dellep | 10-20 New Patients Monthly for Functional Practices",
  description:
    "We help functional medicine practices get 10-20 new patients every month using done-for-you marketing systems. If we don't deliver, you don't pay.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "bg-white dark:bg-charcoal antialiased h-full w-full"
          )}
        >
          <ThemeProvider>
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
