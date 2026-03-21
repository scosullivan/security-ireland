import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security Ireland — Independent analysis for a changing Ireland",
  description:
    "Security Ireland is an independent think tank providing rigorous analysis of security and defence policy for Ireland. We examine evolving security challenges and opportunities in the context of Ireland's unique strategic position.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
