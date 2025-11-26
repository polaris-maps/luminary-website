'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
	const { ref, isVisible } = useScrollAnimation();

	return (
		<section className="py-10 sm:py-16 lg:py-20 px-4" id="about">
			<div
				ref={ref}
				className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
				}`}
			>
				<h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Luminary</h2>
				<p className="text-lg sm:text-xl lg:text-2xl">
					We strive to make navigating UNC&apos;s campus easier and more accessible for all.
					Our mission is to develop an inclusive, user-friendly tool that helps
					individuals find personalized routes tailored to their mobility needs. Together,
					we can create a more connected and barrier-free campus experience with Luminary.
				</p>
			</div>
		</section>
	);
}
