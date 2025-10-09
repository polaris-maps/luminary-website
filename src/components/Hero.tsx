import Image from 'next/image';

export default function Hero() {
	return (
		<section className="mt-4 sm:mt-8 md:mt-12 lg:mt-0 flex items-center justify-center px-3 sm:px-4 md:px-6 2xl:px-8">
			<div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto w-full">
				<div className="grid lg:grid-cols-2 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-0 2xl:gap-12">
					<div className="text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl">
						<h1 className="mb-3 sm:mb-4 xl:mb-6 2xl:mb-8">
							Introducing{' '}
							<span className="text-primary font-semibold">Luminary.</span>
						</h1>
						<p className="mb-3 sm:mb-4 xl:mb-6">The smarter way to</p>
						<p className="mb-6 sm:mb-8 xl:mb-10 2xl:mb-12">navigate UNC Chapel Hill.</p>
						<div className="flex flex-wrap gap-3 sm:gap-4 xl:gap-5 2xl:gap-6 text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-semibold">
							<button className="bg-primary/35 text-primary px-3 sm:px-4 md:px-6 xl:px-8 2xl:px-10 py-2 md:py-3 xl:py-4 2xl:py-5 rounded-xl w-[110px] sm:w-[120px] md:w-[135px] xl:w-[160px] 2xl:w-[200px]">
								About
							</button>
							<button className="bg-primary/35 text-primary px-3 sm:px-4 md:px-6 xl:px-8 2xl:px-10 py-2 md:py-3 xl:py-4 2xl:py-5 rounded-xl w-[110px] sm:w-[120px] md:w-[135px] xl:w-[160px] 2xl:w-[200px]">
								Features
							</button>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end">
						<div className="lg:translate-x-2.5 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none xl:max-w-[600px] 2xl:max-w-[800px]">
							<Image
								src="/hero.png"
								alt="Luminary app hero screenshot"
								width={1000}
								height={1000}
								className="w-full h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
