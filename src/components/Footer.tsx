import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="py-8 px-4 border-t border-white/10 mt-12">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-sm text-neutral-500">
						© {new Date().getFullYear()} App Team Carolina. All rights reserved.
					</p>
					<div className="flex gap-6 text-sm">
						<Link
							href="/privacy"
							className="text-neutral-400 hover:text-white transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-neutral-400 hover:text-white transition-colors"
						>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
