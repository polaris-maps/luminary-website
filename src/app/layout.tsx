import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

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
		<html lang="en">
			<body className="antialiased bg-black text-white">
				<Header />
				{children}
			</body>
		</html>
	);
}
