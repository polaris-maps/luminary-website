'use client';
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -100px 0px',
			}
		);

		const current = ref.current;
		if (current) {
			observer.observe(current);
		}

		return () => {
			if (current) {
				observer.unobserve(current);
			}
		};
	}, []);

	return { ref, isVisible };
}
