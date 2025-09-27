import Image from 'next/image';

export default function Header() {
	return (
		<nav className="max-w-7xl mx-auto px-4">
			<div className="flex justify-between items-center h-16">
				<div className="flex items-center space-x-2">
					<span className="text-[27px] font-medium">luminary</span>
					<Image
						src="/luminary.svg"
						alt="Luminary Logo"
						width={20}
						height={33}
						className="flex-shrink-0"
					/>
				</div>
				<div className="flex space-x-6">
					<a href="#about" className="text-sm">
						About
					</a>
					<a href="#features" className="text-sm">
						Features
					</a>
				</div>
			</div>
		</nav>
	);
}
