import Introduction from "../components/about/sections/Introduction";
import MoreInfos from "../components/about/sections/MoreInfos.tsx";
import CardsGrid from "../components/shared/CardsGrid.tsx";

function About() {
	return (
		<main className="full-bleed">
			<Introduction />

			<section className="py-6 sm:py-8 md:py-12 grid gap-4">
				<MoreInfos className="flex flex-col gap-4">
					<h2 className="font-bold text-lg sm:text-xl md:text-2xl">How I stay committed to learning</h2>
					<p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.</p>
					<p>While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.</p>
				</MoreInfos>
				<MoreInfos className="flex flex-col gap-4">
					<h2 className="font-bold text-lg sm:text-xl md:text-2xl">How I got started</h2>
					<p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
					<p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
				</MoreInfos>
			</section>

			<div className="grid">
				<h3 className="text-center font-bold sm:text-lg md:text-2xl">Recent Posts</h3>
				<CardsGrid />
			</div>
		</main>
	)
}

export default About
