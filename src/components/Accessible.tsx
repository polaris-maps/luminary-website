'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Accessible() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section className="py-10 sm:py-16 lg:py-20 overflow-hidden" id="accessible">
			<div className="max-w-7xl mx-auto px-4">
				<div
					ref={ref}
					className={`text-center transition-all duration-1000 ${
						isVisible
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Accessible</h2>
					<div className="flex justify-center">
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full h-auto max-w-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
