import Image from 'next/image';

export default function Hero() {
	return (
		<section className="-mt-24 flex items-center justify-center px-4 overflow-hidden min-h-[70vh] lg:min-h-[85vh]">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
					<div className="text-left text-3xl sm:text-4xl lg:text-5xl px-4">
						<h1 className="mb-4">
							Introducing{' '}
							<span className="text-primary font-semibold">Luminary.</span>
						</h1>
						<p className="mb-4">The smarter way to</p>
						<p className="mb-8">navigate UNC Chapel Hill.</p>
						<div className="flex flex-wrap gap-4 text-base sm:text-lg font-semibold">
							<a
								href="#about"
								className="bg-primary/35 text-primary px-6 py-3 rounded-xl w-[135px] text-center hover:bg-primary/50 transition-colors"
							>
								About
							</a>
							<a
								href="#features"
								className="bg-primary/35 text-primary px-6 py-3 rounded-xl w-[135px] text-center hover:bg-primary/50 transition-colors"
							>
								Features
							</a>
						</div>
					</div>

					<div className="flex justify-center lg:justify-end overflow-hidden">
						<div className="relative w-full max-w-[500px] lg:max-w-none">
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
