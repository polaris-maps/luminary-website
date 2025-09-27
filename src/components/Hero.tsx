import Image from 'next/image';

export default function Hero() {
	return (
		<section className="-mt-24 flex items-center justify-center">
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 items-center">
					<div className="text-left text-5xl">
						<h1 className="mb-4">
							Introducing{' '}
							<span className="text-primary font-semibold">Luminary.</span>
						</h1>
						<p className="mb-4">The smarter way to</p>
						<p className="mb-8">navigate UNC Chapel Hill.</p>
						<div className="flex flex-wrap gap-4 text-lg font-semibold">
							<button className="bg-primary/35 text-primary px-6 py-3 rounded-xl w-[135px]">
								About
							</button>
							<button className="bg-primary/35 text-primary px-6 py-3 rounded-xl w-[135px]">
								Features
							</button>
							<button className="bg-primary/35 text-primary px-6 py-3 rounded-xl w-[135px]">
								About
							</button>
						</div>
					</div>

					<div className="flex justify-center">
						<div className="translate-x-2.5">
							<Image
								src="/hero.png"
								alt="Luminary app hero screenshot"
								width={1000}
								height={1000}
								className="max-w-none h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
