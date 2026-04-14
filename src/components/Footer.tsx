import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="relative pt-16 pb-12 px-4">
			{/* Gradient top edge instead of hard border */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-hover)] to-transparent" />
			<div
				className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
				style={{
					background: 'linear-gradient(to bottom, rgba(232, 230, 225, 0.02) 0%, transparent 100%)',
				}}
			/>

			<div className="max-w-6xl mx-auto relative">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
					{/* Brand */}
					<div>
						<Image
							src="/logo.png"
							alt="Luminary"
							width={120}
							height={40}
							className="h-8 w-auto rounded"
						/>
						<p className="text-sm text-[var(--text-tertiary)] mt-3 max-w-xs leading-relaxed">
							The smarter, accessible way to navigate UNC Chapel Hill.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="text-sm font-medium text-[var(--text-tertiary)] mb-4">
							Product
						</h4>
						<div className="flex flex-col gap-2.5">
							<a href="#features" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline w-fit">
								Features
							</a>
							<a href="#accessible" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline w-fit">
								Accessibility
							</a>
							<a href="#download" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline w-fit">
								Download
							</a>
						</div>
					</div>

					{/* Legal */}
					<div>
						<h4 className="text-sm font-medium text-[var(--text-tertiary)] mb-4">
							Legal
						</h4>
						<div className="flex flex-col gap-2.5">
							<Link
								href="/privacy"
								className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline w-fit"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors link-underline w-fit"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border)] to-transparent absolute left-0 right-0" />
					<p className="text-xs text-[var(--text-tertiary)] pt-4">
						&copy; {new Date().getFullYear()} App Team Carolina. All rights reserved.
					</p>
					<p className="text-xs text-[var(--text-tertiary)] pt-4">
						Chapel Hill, NC
					</p>
				</div>
			</div>
		</footer>
	);
}
