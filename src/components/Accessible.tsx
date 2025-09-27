import Image from 'next/image';

export default function Accessible() {
	return (
		<section className="mt-8" id="accessible">
			<div className="max-w-7xl mx-auto px-4">
				<div className="text-center">
					<h2 className="text-5xl font-bold">Accessible</h2>
					<div className="-mt-80">
						<Image
							src="/accessibility.png"
							alt="Luminary accessibility features screenshot"
							width={1264}
							height={580}
							className="w-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
