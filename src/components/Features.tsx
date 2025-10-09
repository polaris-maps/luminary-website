'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const features = [
	{
		id: 1,
		image: '/features/1.png',
		alt: 'Luminary app overview',
		width: 900,
		height: 850,
	},
	{
		id: 2,
		subheading: 'Customize obstacle preferences specific to user needs',
		image: '/features/2.png',
		alt: 'Customize obstacle preferences feature screenshot',
		width: 700,
		height: 600,
	},
	{
		id: 3,
		subheading: 'Save frequently visited locations',
		image: '/features/3.png',
		alt: 'Save frequently visited locations',
		width: 360,
		height: 600,
	},
	{
		id: 4,
		subheading: 'Get real-time alerts from other users',
		image: '/features/4.png',
		alt: 'Get real-time alerts from other users',
		width: 700,
		height: 600,
	},
	{
		id: 5,
		subheading: 'Quick Report feature for faster, easier reporting',
		image: '/features/5.png',
		alt: 'Quick Report feature screenshot',
		width: 700,
		height: 600,
	},
];

export default function Features() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-32" id="features">
			<div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 2xl:px-12">
				<div className="relative">
					{/* Carousel Container */}
					<div className="overflow-hidden rounded-lg" ref={emblaRef}>
						<div className="flex">
							{features.map((feature) => (
								<div key={feature.id} className="flex-[0_0_100%] px-1 sm:px-2 md:px-4 xl:px-6">
									<div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-[950px] xl:h-[1100px] 2xl:h-[1300px] 3xl:h-[1600px] flex items-center justify-center">
										<div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 md:space-y-6 xl:space-y-8 2xl:space-y-10 max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl px-2 sm:px-4 xl:px-6">
											{feature.subheading && (
												<div className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl px-2">
													{feature.subheading}
												</div>
											)}
											<div className="relative w-full flex items-center justify-center">
												<Image
													src={feature.image}
													alt={feature.alt || ''}
													width={feature.width}
													height={feature.height}
													className="w-auto h-auto max-w-full max-h-[380px] sm:max-h-[480px] md:max-h-[580px] lg:max-h-[800px] xl:max-h-[950px] 2xl:max-h-[1100px] 3xl:max-h-[1400px] object-contain"
												/>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={scrollPrev}
						className="absolute left-0 sm:left-2 md:left-4 xl:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
						aria-label="Previous slide"
					>
						◀
					</button>

					<button
						onClick={scrollNext}
						className="absolute right-0 sm:right-2 md:right-4 xl:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
						aria-label="Next slide"
					>
						▶
					</button>
				</div>
			</div>
		</section>
	);
}
