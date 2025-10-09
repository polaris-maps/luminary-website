import Image from 'next/image';

export default function Download() {
	return (
		<section className="mt-12 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40 2xl:mt-48">
			<div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl mx-auto px-3 sm:px-4 md:px-6 2xl:px-8 text-center">
				<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">Download Luminary Today</h2>
				<div className="flex justify-center">
					<Image
						src="/appstore.png"
						alt="Download on the App Store"
						height={78}
						width={264}
						className="w-auto h-auto max-w-[180px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[264px] xl:max-w-[320px] 2xl:max-w-[400px] 3xl:max-w-[500px]"
					/>
				</div>
			</div>
		</section>
	);
}
