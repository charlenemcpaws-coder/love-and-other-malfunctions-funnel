import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://love-and-other-malfunctions-funnel.vercel.app"),
  title: "Love and Other Malfunctions",
  description:
    "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
  openGraph: {
    title: "Love and Other Malfunctions",
    description:
      "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
    url: "https://love-and-other-malfunctions-funnel.vercel.app/",
    siteName: "Love and Other Malfunctions",
    images: [
      {
        url: "/book-cover.png",
        width: 1200,
        height: 630,
        alt: "Love and Other Malfunctions cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Love and Other Malfunctions",
    description:
      "A near-future survival story about loyalty, bad decisions, and dogs who refuse to give up on their humans. Author proceeds support Woofington Manor Rescue & Sanctuary and the rescue dream behind it.",
    images: ["/book-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}