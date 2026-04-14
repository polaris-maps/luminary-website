import Hero from '@/components/Hero';
import Accessible from '@/components/Accessible';
import About from '@/components/About';
import Features from '@/components/Features';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

function SectionDivider() {
	return <div className="section-divider" />;
}

export default function Home() {
	return (
		<main className="min-h-screen text-[var(--foreground)] font-[family-name:var(--font-sans)] overflow-x-hidden selection:bg-[var(--accent-primary)]/20 selection:text-[var(--accent-primary)]">
			<Hero />
			<SectionDivider />
			<About />
			<SectionDivider />
			<Features />
			<SectionDivider />
			<Accessible />
			<SectionDivider />
			<Download />
			<Footer />
		</main>
	);
}
