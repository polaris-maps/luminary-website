import Image from 'next/image';

export default function Accessible() {
	return (
		<section className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-32" id="accessible">
			<div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 2xl:px-8">
				<div className="text-center">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold relative z-10">Accessible</h2>
					<div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-40 xl:-mt-56 2xl:-mt-80">
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full h-auto"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
