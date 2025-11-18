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
		<section className="py-10 sm:py-16 lg:py-20 overflow-hidden" id="features">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative">
					{/* Carousel Container */}
					<div className="overflow-hidden rounded-lg" ref={emblaRef}>
						<div className="flex">
							{features.map((feature) => (
								<div key={feature.id} className="flex-[0_0_100%] px-2 sm:px-4">
									<div className="h-[600px] sm:h-[700px] lg:h-[800px] flex items-center justify-center">
										<div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 max-w-4xl w-full">
											{feature.subheading && (
												<div className="text-lg sm:text-xl lg:text-2xl px-4">
													{feature.subheading}
												</div>
											)}
											<div className="relative w-full max-w-full">
												<Image
													src={feature.image}
													alt={feature.alt || ''}
													width={feature.width}
													height={feature.height}
													className="w-auto h-auto max-w-full max-h-[450px] sm:max-h-[550px] lg:max-h-[650px] mx-auto"
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
						className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 text-xl sm:text-2xl"
						aria-label="Previous slide"
					>
						◀
					</button>

					<button
						onClick={scrollNext}
						className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10 text-xl sm:text-2xl"
						aria-label="Next slide"
					>
						▶
					</button>
				</div>
			</div>
		</section>
	);
}
