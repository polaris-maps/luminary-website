import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="py-12 px-4 border-t border-[var(--border)]">
			<div className="max-w-6xl mx-auto">
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
							<a href="#features" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
								Features
							</a>
							<a href="#accessible" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
								Accessibility
							</a>
							<a href="#download" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
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
								className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
							>
								Terms & Conditions
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-[var(--text-tertiary)]">
						&copy; {new Date().getFullYear()} App Team Carolina. All rights reserved.
					</p>
					<p className="text-xs text-[var(--text-tertiary)]">
						Chapel Hill, NC
					</p>
				</div>
			</div>
		</footer>
	);
}
