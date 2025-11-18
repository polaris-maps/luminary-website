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
		<html lang="en" className="overflow-x-hidden">
			<body className="antialiased bg-black text-white overflow-x-hidden">
				<Header />
				{children}
			</body>
		</html>
	);
}
