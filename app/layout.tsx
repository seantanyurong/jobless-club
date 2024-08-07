import type { Metadata } from 'next';
import './globals.css';
import { Outfit } from 'next/font/google';
import localFont from 'next/font/local';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Jobless Club',
  description: 'Just 3 Singaporean boys trying to make 60k MMR so they can retire in the mountains of Thailand.',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

const monument = localFont({
  variable: '--font-monument',
  src: [
    {
      path: '../fonts/MonumentExtended-Ultrabold.otf',
      weight: '900',
      style: 'black',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${monument.variable} ${outfit.className}`}>{children}</body>
    </html>
  );
}
