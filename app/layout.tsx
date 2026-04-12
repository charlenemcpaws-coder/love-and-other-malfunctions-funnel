import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://love-and-other-malfunctions-funnel.vercel.app"),
  title: "Love and Other Malfunctions",
  description:
    "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
  openGraph: {
    title: "Love and Other Malfunctions",
    description:
      "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
    url: "https://love-and-other-malfunctions-funnel.vercel.app",
    siteName: "Love and Other Malfunctions",
    images: [
      {
        url: "/cover.png",
        width: 1600,
        height: 2560,
        alt: "Love and Other Malfunctions book cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love and Other Malfunctions",
    description:
      "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
    images: ["/cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}