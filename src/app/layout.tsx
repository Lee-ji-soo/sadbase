import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sadebase',
  description: 'sadebase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <link rel='icon' href='./icon.ico' sizes='any' />
      <meta property='og:image' content='/ogImage/1200x630.png' />
      <meta property='og:image:alt' content='sadbase' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='850' />
      <meta property='og:image:height' content='500' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
