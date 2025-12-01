'use client';
import Image from 'next/image';

const features = [
	{
		id: 1,
        title: "Route Customization",
		description: 'Customize obstacle preferences specific to your mobility needs. Avoid stairs, steep hills, or construction zones with ease.',
		image: '/features/2.png',
		width: 700,
		height: 600,
	},
	{
		id: 2,
        title: "Saved Places",
		description: 'Save frequently visited locations for quick access. Your dorm, favorite library, or dining hall is just a tap away.',
		image: '/features/3.png',
		width: 360,
		height: 600,
	},
	{
		id: 3,
        title: "Community Alerts",
		description: 'Get real-time alerts from other users about temporary obstacles, elevators out of service, or blocked paths.',
		image: '/features/4.png',
		width: 700,
		height: 600,
	},
	{
		id: 4,
        title: "Quick Reporting",
		description: 'Help the community by quickly reporting issues you encounter. A barrier-free campus starts with us.',
		image: '/features/5.png',
		width: 700,
		height: 600,
	},
];

export default function Features() {
	return (
		<section className="py-24 relative" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-32">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Powered by Intelligence</h2>
                    <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mx-auto">
                        Everything you need to navigate with confidence.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.id} 
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="inline-block p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                    <span className="text-blue-400 font-mono text-sm">0{feature.id}</span>
                                </div>
                                <h3 className="text-3xl sm:text-4xl font-bold text-white">{feature.title}</h3>
                                <p className="text-lg text-neutral-400 leading-relaxed">{feature.description}</p>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full flex justify-center">
                                <div className="relative group w-full max-w-md">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative rounded-[2rem] overflow-hidden border border-white/10 glass-panel p-4">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            width={feature.width}
                                            height={feature.height}
                                            className="w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
		</section>
	);
}
