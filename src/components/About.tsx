export default function About() {
	return (
		<section className="relative py-32 px-4" id="about">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[60vw] h-[60vw] bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>
            
			<div className="max-w-5xl mx-auto relative z-10">
                <div className="glass-panel rounded-3xl p-8 sm:p-12 md:p-20 text-center border-white/5 bg-black/40">
                    <h2 className="text-xs sm:text-sm font-mono text-blue-400 tracking-widest uppercase mb-8">Our Mission</h2>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-neutral-400">
                        We believe navigation should be <span className="text-white">limitless</span>. 
                        Luminary is designed to empower every student at UNC Chapel Hill with 
                        <span className="text-blue-400"> personalized, accessible routes</span>. 
                        Because a barrier-free campus is a connected campus.
                    </p>
                </div>
			</div>
		</section>
	);
}
