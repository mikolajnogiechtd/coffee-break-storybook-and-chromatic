import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Storybook & Chromatic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
