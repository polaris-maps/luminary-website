import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const serif = Instrument_Serif({
	subsets: ['latin'],
	variable: '--font-serif',
	display: 'swap',
	weight: '400',
	style: ['normal', 'italic'],
});

const sans = DM_Sans({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
	weight: ['400', '500', '600', '700'],
});

const mono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
	display: 'swap',
	weight: ['400', '500'],
});

export const metadata: Metadata = {
	title: 'Luminary - The smarter way to navigate UNC Chapel Hill',
	description:
		'Luminary is an inclusive, user-friendly navigation tool that helps individuals find personalized routes tailored to their mobility needs.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable} ${mono.variable} overflow-x-hidden`}>
			<body className={`${sans.className} antialiased overflow-x-hidden`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
