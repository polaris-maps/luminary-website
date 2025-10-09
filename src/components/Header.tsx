import Image from 'next/image';

export default function Header() {
	return (
		<nav className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-3 sm:px-4 md:px-6 2xl:px-8">
			<div className="flex justify-between items-center h-12 sm:h-14 md:h-16 xl:h-20 2xl:h-24">
				<div className="flex items-center space-x-1.5 sm:space-x-2 xl:space-x-3">
					<span className="text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-medium">luminary</span>
					<Image
						src="/luminary.svg"
						alt="Luminary Logo"
						width={20}
						height={33}
						className="flex-shrink-0 w-3.5 sm:w-4 md:w-5 xl:w-6 2xl:w-8 h-auto"
					/>
				</div>
				<div className="flex space-x-3 sm:space-x-4 md:space-x-6 xl:space-x-8 2xl:space-x-10">
					<a href="#about" className="text-xs sm:text-sm xl:text-base 2xl:text-lg 3xl:text-xl hover:text-primary transition-colors">
						About
					</a>
					<a href="#features" className="text-xs sm:text-sm xl:text-base 2xl:text-lg 3xl:text-xl hover:text-primary transition-colors">
						Features
					</a>
				</div>
			</div>
		</nav>
	);
}
