import { Source_Sans_3 } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import Header from '@/components/header';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Терминал Почты Донбасса',
};

const sourceSans3 = Source_Sans_3({
    subsets: ['cyrillic', 'latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn('antialiased', sourceSans3.className)}>
                <Header />
                {children}
            </body>
        </html>
    );
}
