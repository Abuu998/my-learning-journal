import { blogs } from "../../../lib"
import BlogCard from "../../shared/BlogCard.tsx";

type Image = {
	mobile: string,
	desktop: string
}

export type BlogType = {
	title: string
	description: string
	image: Image
	date: string
}

function CardsGrid() {

	const blogCards = blogs.map((blog: BlogType) => (
		<BlogCard key={`${blog.title}-blog-post`} blog={blog} />
	))

	return (
		<section
			className="py-6 sm:py-8 md:py-12 grid grid-cols-[repeat(auto-fit,_minmax(min(28ch,_100%),_1fr))] gap-6"
		>
			{blogCards}
		</section>
	)
}

export default CardsGrid
