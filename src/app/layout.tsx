import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sa'adiyah - Islamic Arts & Education Daycare",
  description: "Sa'adiyah is committed to providing the best environment for children to grow with strong Islamic values and limitless creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-white text-black antialiased" style={{ fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}