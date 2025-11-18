import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Accessible from '@/components/Accessible';
import About from '@/components/About';
import Features from '@/components/Features';
import Download from '@/components/Download';
import ScrollIndicator from '@/components/ScrollIndicator';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<div className="text-white font-sans py-20 overflow-x-hidden">
				<Hero />
				<ScrollIndicator />
				<Accessible />
				<About />
				<Features />
				<Download />
			</div>
			<Footer />
		</>
	);
}
