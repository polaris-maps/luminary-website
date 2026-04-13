'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import BorderGlow from './BorderGlow';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-[#000000]/95 border-b border-[var(--border)]'
					: 'bg-transparent'
			}`}
		>
			<nav className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 lg:h-20">
					<a href="#" className="flex items-center gap-2.5 group">
						<Image
							src="/luminary.svg"
							alt="Luminary Logo"
							width={20}
							height={33}
							className="w-4 lg:w-5 h-auto opacity-70 group-hover:opacity-100 transition-opacity"
						/>
						<span className="text-lg lg:text-xl font-[family-name:var(--font-serif)] italic text-[var(--foreground)]/80 tracking-tight group-hover:text-[var(--foreground)] transition-colors">
							luminary
						</span>
					</a>

					<div className="flex items-center gap-8">
						<div className="hidden sm:flex items-center gap-7">
							<a
								href="#about"
								className="text-[13px] tracking-wide text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
							>
								About
							</a>
							<a
								href="#features"
								className="text-[13px] tracking-wide text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
							>
								Features
							</a>
							<a
								href="#accessible"
								className="text-[13px] tracking-wide text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
							>
								Accessibility
							</a>
						</div>
						<BorderGlow borderRadius={8} backgroundColor="#000000" edgeSensitivity={40} glowColor="210 100 80">
							<a
								href="https://apps.apple.com/us/app/luminary-navigation/id6754342125"
								target="_blank"
								rel="noopener noreferrer"
								className="block px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-white"
							>
								Download
							</a>
						</BorderGlow>
					</div>
				</div>
			</nav>
		</header>
	);
}
