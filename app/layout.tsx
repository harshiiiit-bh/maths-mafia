import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Maths Mafia — Make numbers make sense", template: "%s | Maths Mafia" },
  description: "A smarter, calmer way to master CBSE Class 10 Mathematics. Learn concepts, practise with purpose, and see your progress.",
  applicationName: "Maths Mafia"
};

export const viewport: Viewport = {
  themeColor: "#191a32",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
