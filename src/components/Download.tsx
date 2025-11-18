'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Download() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section className="py-16 sm:py-20 lg:py-24 px-4">
			<div
				ref={ref}
				className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}
			>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-10 lg:mb-12">
					Download Luminary Today
				</h2>
				<div className="flex justify-center">
					<Image
						src="/appstore.png"
						alt="Download on the App Store"
						height={78}
						width={264}
						className="w-auto h-auto max-w-full"
					/>
				</div>
			</div>
		</section>
	);
}
