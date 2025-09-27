import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Accessible from '@/components/Accessible';
import About from '@/components/About';
import Features from '@/components/Features';
import Download from '@/components/Download';

export default function Home() {
	return (
		<div className="text-white font-sans py-20">
			<Hero />
			<Accessible />
			<About />
			<Features />
			<Download />
		</div>
	);
}
