import type { Metadata } from "next";
import "./globals.css";
import PillNav from '../components/navbar';
import SmoothScroll from '../components/SmoothScroll';

export const metadata: Metadata = {
  title: "Figmify",
  description: "UX Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'Inter, sans-serif' }}>
        <SmoothScroll>
          <PillNav
            logo="/logo.svg"
            logoAlt="Company Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Committee', href: '/committee' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
