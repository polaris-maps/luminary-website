import Link from 'next/link';

export const metadata = {
	title: 'Terms & Conditions - Luminary',
	description: 'Terms and Conditions for Luminary navigation app',
};

export default function TermsAndConditions() {
	return (
		<div className="min-h-screen bg-black text-white py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
				>
					← Back to Home
				</Link>

				<h1 className="text-4xl sm:text-5xl font-bold mb-8">Terms & Conditions</h1>

				<div className="prose prose-invert prose-lg max-w-none space-y-8">
					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Agreement to Terms</h2>
						<p className="text-gray-300">
							These Terms and Conditions constitute a legally binding agreement between you
							and App Team Carolina (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your
							access to and use of the Luminary website and mobile application
							(collectively, the &ldquo;Services&rdquo;). We are registered in North Carolina, United
							States and have our registered office at 2501 FPG Student Union Box 350,
							Chapel Hill, NC 27514.
						</p>
						<p className="text-gray-300 mt-4">
							You agree that by accessing the Services, you have read, understood, and agree
							to be bound by all of these Terms and Conditions. If you do not agree with all
							of these terms and conditions, you must cease use of our product(s)
							immediately.
						</p>
						<p className="text-gray-300 mt-4">
							We reserve the right to make changes or modifications to these Terms and
							Conditions at any time and for any reason. You will be subject to the changes
							in any revised Terms and Conditions by your continued use of the Services.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Our Services</h2>
						<p className="text-gray-300">
							The information provided on the Services is not intended for distribution to
							or use by any person or entity in any jurisdiction or country where such
							distribution or use would be contrary to law or regulation. Those persons who
							choose to access the Services from other locations do so on their own
							initiative and are solely responsible for compliance with local laws.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							Intellectual Property Rights
						</h2>
						<div className="space-y-4 text-gray-300">
							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									Our Intellectual Property
								</h3>
								<p>
									Unless otherwise indicated, the Application is our proprietary property
									and all source code, databases, functionality, software, designs, audio,
									video, text, photographs, and graphics (collectively, the &ldquo;Content&rdquo;) and
									the trademarks, service marks, and logos (the &ldquo;Marks&rdquo;) are owned or
									controlled by us and are protected by copyright and trademark laws.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									Your Use of Our Services
								</h3>
								<p>
									Subject to your compliance with these Terms and Conditions, we grant you a
									non-exclusive, non-transferable, revocable license to access the Services
									solely for your personal, non-commercial use.
								</p>
								<p className="mt-2">
									No part of the Services may be copied, reproduced, distributed, or
									exploited for any commercial purpose without our express prior written
									permission.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">User Representations</h2>
						<p className="text-gray-300 mb-4">By using the Services, you represent that:</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>You have the legal capacity and agree to comply with these Terms</li>
							<li>You are not a minor in the jurisdiction in which you reside</li>
							<li>
								You will not access the Services through automated or non-human means
							</li>
							<li>You will not use the Services for any illegal or unauthorized purpose</li>
							<li>
								Your use of the Services will not violate any applicable law or regulation
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Prohibited Activities</h2>
						<p className="text-gray-300 mb-4">
							You may not access or use the Services for any purpose other than that for
							which we make the Services available. As a user, you agree not to:
						</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>
								Systematically retrieve data to create a compilation or directory without
								permission
							</li>
							<li>Trick, defraud, or mislead us and other users</li>
							<li>Circumvent or disable security-related features</li>
							<li>Disparage, tarnish, or harm us or the Services</li>
							<li>Use information obtained to harass, abuse, or harm another person</li>
							<li>Use the Services inconsistent with applicable laws or regulations</li>
							<li>Upload or transmit viruses or other malicious code</li>
							<li>Engage in automated use of the system</li>
							<li>Attempt to impersonate another user</li>
							<li>Interfere with or disrupt the Services</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							Mobile Application License
						</h2>
						<p className="text-gray-300">
							When you use our mobile application obtained from the Apple Store or Google
							Play, the license granted is limited to a non-transferable license to use the
							application on a device that utilizes the Apple iOS or Android operating
							systems. We are responsible for providing maintenance and support services as
							required under applicable law.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Services Management</h2>
						<p className="text-gray-300">
							We reserve the right, but not the obligation, to: (1) monitor the Services for
							violations; (2) take appropriate legal action against violators; (3) refuse,
							restrict access to, or disable any content; (4) remove files that are
							excessive in size; and (5) otherwise manage the Services to protect our rights
							and property.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h2>
						<p className="text-gray-300">
							We care about data privacy and security. Please review our{' '}
							<Link href="/privacy" className="text-primary hover:underline">
								Privacy Policy
							</Link>
							. By using the Services, you agree to be bound by our Privacy Policy.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Forbidden Posts</h2>
						<p className="text-gray-300 mb-4">
							When you submit Content, you must ensure it is lawful. You may not submit
							Content that:
						</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>Infringes proprietary rights including copyright and trademarks</li>
							<li>Poses a risk to safety, security, or health</li>
							<li>Is unlawful, defamatory, or invades privacy</li>
							<li>Is harassing, offensive, threatening, or vulgar</li>
							<li>Encourages criminal behavior or unlawfully discriminates</li>
							<li>
								Promotes pyramid schemes, chain letters, or disruptive commercial messages
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Disclaimer</h2>
						<p className="text-gray-300 uppercase">
							THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
							YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT
							PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN
							CONNECTION WITH THE SERVICES.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							Limitations of Liability
						</h2>
						<p className="text-gray-300 uppercase">
							IN NO EVENT WILL WE OR OUR TEAM MEMBERS BE LIABLE FOR ANY DIRECT, INDIRECT,
							INCIDENTAL, OR CONSEQUENTIAL DAMAGE ARISING FROM YOUR USE OF THE SERVICES OR
							INABILITY TO USE THE SERVICES.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Governing Law</h2>
						<p className="text-gray-300">
							These Terms and Conditions are governed by and construed in accordance with
							the laws of the State of North Carolina, without regard to its conflict of law
							principles.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
						<p className="text-gray-300">
							To resolve a complaint or receive further information regarding use of the
							Services, please contact us at:
						</p>
						<div className="mt-4 text-gray-300">
							<p className="font-semibold text-white">App Team Carolina</p>
							<p>2501 FPG Student Union Box 350</p>
							<p>Chapel Hill, NC 27514</p>
							<p>United States</p>
							<p className="mt-2">
								<a
									href="mailto:dev@appteamcarolina.com"
									className="text-primary hover:underline"
								>
									dev@appteamcarolina.com
								</a>
							</p>
						</div>
					</section>

					<p className="text-sm text-gray-400 mt-12">
						Last updated: November 18, 2025
					</p>
				</div>
			</div>
		</div>
	);
}
