import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LeftNavbar from '../ui/leftNavbar/leftNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftNavbar></LeftNavbar>
        <div className="py-6 pl-10 ml-52">{children}</div>
      </body>
    </html>
  );
}
