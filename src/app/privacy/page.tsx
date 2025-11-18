import Link from 'next/link';

export const metadata = {
	title: 'Privacy Policy - Luminary',
	description: 'Privacy Policy for Luminary navigation app',
};

export default function PrivacyPolicy() {
	return (
		<div className="min-h-screen bg-black text-white py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
				>
					← Back to Home
				</Link>

				<h1 className="text-4xl sm:text-5xl font-bold mb-8">Privacy Policy</h1>

				<div className="prose prose-invert prose-lg max-w-none space-y-8">
					<section>
						<p className="text-gray-300 mb-4">
							This privacy notice for App Team Carolina ("Organization", "we", "us" or
							"our"), describes how and why we might collect, store, use and/or share your
							information when you use our services ("Services"), such as when you:
						</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>Download and use our mobile application, Luminary</li>
							<li>
								Engage with us in other related ways, including any sales, marketing or
								events
							</li>
						</ul>
						<p className="text-gray-300 mt-4">
							Questions or concerns? Reading this privacy notice will help you understand
							your privacy rights and choices. If you do not agree with our policies and
							practices, please do not use our Services. If you still have any questions or
							concerns, please contact us at{' '}
							<a
								href="mailto:dev@appteamcarolina.com"
								className="text-primary hover:underline"
							>
								dev@appteamcarolina.com
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Summary of Key Points</h2>
						<div className="space-y-4 text-gray-300">
							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									What personal information do we process?
								</h3>
								<p>
									When you visit, use or navigate our Services, we may process personal
									information depending on how you interact with App Team Carolina and the
									Services, the choices you make, and the products and features you use.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									Do we process any sensitive personal information?
								</h3>
								<p>
									We may process sensitive personal information when necessary with your
									consent or as otherwise permitted by applicable law.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									Do we receive information from third parties?
								</h3>
								<p>We do not collect any information from third parties.</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									How do we process your information?
								</h3>
								<p>
									We process your information to provide, improve and administer our
									Service, communicate with you, for security and fraud prevention, and to
									comply with law. We may also process your information for other purposes
									with your consent.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									How do we keep your information safe?
								</h3>
								<p>
									We have organizational and technical processes and procedures in place to
									protect your personal information. However, no electronic transmission
									over the internet or information storage technology can be guaranteed to
									be 100% secure.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									What are your rights?
								</h3>
								<p>
									Depending on where you are located geographically, the applicable privacy
									law may mean you have certain rights regarding your personal information.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-white mb-2">
									How do you exercise your rights?
								</h3>
								<p>
									The easiest way to exercise your rights is by deleting the app, such that
									all your personal information will be deleted and we will not have access
									to it. You can also contact us with any issues.
								</p>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							1. What Information Do We Collect?
						</h2>
						<div className="space-y-4 text-gray-300">
							<p className="font-semibold text-white">
								Personal information you disclose to us
							</p>
							<p>
								We collect personal information that you voluntarily provide to us when you
								express an interest in obtaining information about us or our products and
								Services, when you participate in activities on the Services, or otherwise
								when you contact us.
							</p>

							<p className="font-semibold text-white mt-4">Sensitive Information:</p>
							<p>
								When necessary, with your consent or otherwise permitted by applicable law,
								we process the following categories of sensitive information:
							</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>Location</li>
								<li>Route preferences</li>
								<li>IP address</li>
								<li>
									Information about things near your device, such as Wi-Fi access points,
									cell towers, and Bluetooth-enabled devices
								</li>
							</ul>

							<p className="font-semibold text-white mt-4">Application Data:</p>
							<p>If you use our application, we may also collect:</p>
							<ul className="list-disc pl-6 space-y-1">
								<li>
									<strong className="text-white">Geolocation Information:</strong> We may
									request access or permission to track location-based information from your
									mobile device to provide certain location-based services.
								</li>
								<li>
									<strong className="text-white">Mobile Device Data:</strong> We
									automatically collect device information such as your mobile device's
									unique device ID.
								</li>
								<li>
									<strong className="text-white">Push Notifications:</strong> We may request
									to send you push notifications regarding certain features of the
									application.
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							2. How Do We Process Your Information?
						</h2>
						<p className="text-gray-300 mb-4">
							We process your personal information for a variety of reasons, including:
						</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>To deliver and facilitate delivery of services to the user</li>
							<li>To request feedback and contact you about your use of our Services</li>
							<li>
								To evaluate and improve our Services, products, marketing, and your
								experience
							</li>
							<li>To identify usage trends and optimize product design</li>
						</ul>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							3. How Long Do We Keep Your Information?
						</h2>
						<p className="text-gray-300">
							We will only keep your personal information for as long as it is necessary
							for the purposes set out in this Privacy Notice. When we have no ongoing
							legitimate business need to process your personal information, we will either
							delete or anonymize such information.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							4. How Do We Keep Your Information Safe?
						</h2>
						<p className="text-gray-300">
							We have implemented appropriate and reasonable technical and organizational
							security measures designed to protect the security of any personal
							information we process. However, no electronic transmission over the internet
							can be guaranteed to be 100% secure. You should only access the Services
							within a secure environment.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							5. What Are Your Privacy Rights?
						</h2>
						<p className="text-gray-300 mb-4">
							You have the right to withdraw your consent at any time. You can withdraw
							your consent at any time by contacting us or deleting the app, which will
							delete your personal information.
						</p>
						<p className="text-gray-300">
							If you have questions or concerns about your privacy rights, you may email us
							at{' '}
							<a
								href="mailto:dev@appteamcarolina.com"
								className="text-primary hover:underline"
							>
								dev@appteamcarolina.com
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">
							6. Location Information
						</h2>
						<p className="text-gray-300 mb-4">
							We collect location information when you use our services, which helps us
							offer features like driving directions and search results for things near you.
							The types of location data we collect may include:
						</p>
						<ul className="list-disc pl-6 text-gray-300 space-y-2">
							<li>GPS and other sensor data from your device</li>
							<li>IP address</li>
							<li>Activity on our services</li>
							<li>
								Information about things near your device, such as Wi-Fi access points and
								cell towers
							</li>
						</ul>
						<p className="text-gray-300 mt-4">
							You can control location permissions through your device's settings. However,
							disabling location may limit certain features of the app.
						</p>
					</section>

					<section>
						<h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
						<p className="text-gray-300">
							If you have questions or comments about this policy, you may contact us at:
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
