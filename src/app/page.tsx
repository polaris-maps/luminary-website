import Hero from '@/components/Hero';
import Accessible from '@/components/Accessible';
import About from '@/components/About';
import Features from '@/components/Features';
import Download from '@/components/Download';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
			<Hero />
			<ScrollIndicator />
            <About />
			<Features />
			<Accessible />
			<Download />
			<Footer />
		</main>
	);
}
