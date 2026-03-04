import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { IntlClientProvider } from "@/components/intl-provider";

export const metadata: Metadata = {
  title: "Dellep | 10-20 New Patients Monthly for Functional & Naturopathic Practices",
  description:
    "We help functional and naturopathic practitioners get 10-20 new patients every month using done-for-you marketing systems. If we don't deliver, you don't pay.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22C55E" },
    { media: "(prefers-color-scheme: dark)", color: "#22C55E" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1536478477413206');
          fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1536478477413206&ev=PageView&noscript=1"
          /></noscript>
        </head>
        <body
          className={cn(
            "font-sans bg-white dark:bg-charcoal antialiased h-full w-full"
          )}
        >
          <IntlClientProvider>
            <ThemeProvider>
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </IntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
