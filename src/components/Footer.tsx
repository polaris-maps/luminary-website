import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="py-8 px-4 border-t border-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-sm text-gray-400">
						© {new Date().getFullYear()} App Team Carolina. All rights reserved.
					</p>
					<div className="flex gap-6 text-sm">
						<Link
							href="/privacy"
							className="text-gray-400 hover:text-primary transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-gray-400 hover:text-primary transition-colors"
						>
							Terms & Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
