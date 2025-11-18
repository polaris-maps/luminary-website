import Image from 'next/image';

export default function Header() {
	return (
		<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between items-center h-16">
				<div className="flex items-center space-x-2">
					<span className="text-xl sm:text-[27px] font-medium">luminary</span>
					<Image
						src="/luminary.svg"
						alt="Luminary Logo"
						width={20}
						height={33}
						className="flex-shrink-0"
					/>
				</div>
				<div className="flex space-x-4 sm:space-x-6">
					<a
						href="#about"
						className="text-sm hover:text-primary transition-colors"
					>
						About
					</a>
					<a
						href="#features"
						className="text-sm hover:text-primary transition-colors"
					>
						Features
					</a>
				</div>
			</div>
		</nav>
	);
}
