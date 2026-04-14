'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BorderGlow from './BorderGlow';

const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#features', label: 'Features' },
	{ href: '#accessible', label: 'Accessibility' },
];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (mobileOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => { document.body.style.overflow = ''; };
	}, [mobileOpen]);

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'bg-black/60 backdrop-blur-xl border-b border-white/[0.06]'
					: 'bg-transparent'
			}`}
		>
			<nav className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 lg:h-20">
					<a href="#" className="flex items-center gap-2.5 group relative z-50">
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
						{/* Desktop nav */}
						<div className="hidden sm:flex items-center gap-7">
							{navLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									className="text-[13px] tracking-wide text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline"
								>
									{link.label}
								</a>
							))}
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

						{/* Mobile hamburger */}
						<button
							onClick={() => setMobileOpen(!mobileOpen)}
							className="sm:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
							aria-label="Toggle menu"
						>
							<motion.span
								animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
								className="block w-5 h-[1.5px] bg-[var(--foreground)] origin-center"
								transition={{ duration: 0.3 }}
							/>
							<motion.span
								animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
								className="block w-5 h-[1.5px] bg-[var(--foreground)]"
								transition={{ duration: 0.2 }}
							/>
							<motion.span
								animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
								className="block w-5 h-[1.5px] bg-[var(--foreground)] origin-center"
								transition={{ duration: 0.3 }}
							/>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl sm:hidden"
					>
						<motion.nav
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
							className="flex flex-col items-center justify-center h-full gap-8"
						>
							{navLinks.map((link, i) => (
								<motion.a
									key={link.href}
									href={link.href}
									onClick={() => setMobileOpen(false)}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.15 + i * 0.08 }}
									className="text-2xl font-[family-name:var(--font-serif)] text-[var(--foreground)] tracking-tight"
								>
									{link.label}
								</motion.a>
							))}
							<motion.a
								href="https://apps.apple.com/us/app/luminary-navigation/id6754342125"
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								onClick={() => setMobileOpen(false)}
								className="mt-4 px-8 py-3 text-base font-medium text-[var(--foreground)] border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
							>
								Download for iOS
							</motion.a>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
