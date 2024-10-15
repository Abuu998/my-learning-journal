import { blogs } from "../../../lib"
import BlogCard from "../../shared/BlogCard.tsx";
import {useState} from "react";
import Button from "../../shared/Button.tsx";

type Image = {
	mobile: string,
	desktop: string
}

type CardsGridProps = {
	paginate: boolean
	shownBlogsNumber: number
}

export type BlogType = {
	title: string
	description: string
	image: Image
	date: string
}

function CardsGrid({ paginate = true, shownBlogsNumber = 3 }: CardsGridProps) {
	const [shownBlogs, setShownBlogs] = useState<number>(shownBlogsNumber)

	const handlePagination = (): void => {
		if(!(shownBlogs >= blogs.length)) {
			setShownBlogs(prev => prev + 3)
		} else {
			return
		}
	}

	const blogsToShow: BlogType[] = paginate ? blogs.slice(0, shownBlogs) : blogs

	const blogCards = blogsToShow.map((blog: BlogType) => (
		<BlogCard key={`${blog.title}-blog-post`} blog={blog} />
	))

	return (
		<section
			className="py-6 sm:py-8 md:py-12 grid justify-items-center gap-10"
		>
			<div className="grid grid-cols-[repeat(auto-fit,_minmax(min(28ch,_100%),_1fr))] gap-6">
				{blogCards}
			</div>

			{
				(paginate && blogs.length > shownBlogs) && (
					<Button
						className="underline underline-offset-2 hover:text-slate-600"
						onClick={handlePagination}
					>
						View More
					</Button>
				)
			}
		</section>
	)
}

export default CardsGrid
