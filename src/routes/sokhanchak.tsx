import { createFileRoute } from "@tanstack/react-router";
// import Reviews from "@/components/Reviews"
// import Certificates from "@/components/Certificates"
import Pricing from "@/components/Pricing"
import Services from "@/components/Services"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"
import Certificates from "@/components/Certificates";

export const Route = createFileRoute("/sokhanchak")({
	component: App,
});



function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 bg-fixed">
			<div className="absolute inset-0 bg-[url('/subtle-pattern.png')] opacity-10 z-0"></div>
			<div className="relative z-10">
				<header className="bg-white bg-opacity-90 shadow-sm backdrop-blur-sm">
					<Navbar />
				</header>

				<main className="py-10">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<Hero />
						<About />
						<Services />
						<Pricing />
						<Certificates />
						{/* <Reviews /> */}
						<Contact />
					</div>
				</main>

				<Footer />
			</div>
		</div>
	);
}
