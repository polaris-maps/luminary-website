import Image from 'next/image';

export default function Download() {
	return (
		<section className="mt-32">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-4xl mb-16">Download Luminary Today</h2>
				<div className="flex justify-center">
					<Image
						src="/appstore.png"
						alt="Download on the App Store"
						height={78}
						width={264}
					/>
				</div>
			</div>
		</section>
	);
}
