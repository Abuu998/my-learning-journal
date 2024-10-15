import { BlogType } from "../home/sections/CardsGrid.tsx";
import Dates from "./Dates.tsx";

type BlogCardProps = {
    blog: BlogType
}

function BlogCard({ blog }: BlogCardProps) {
    const { title, image, description, date } = blog
    return (
        <div
            className="grid grid-cols-1 grid-rows-subgrid gap-0 rounded-md overflow-hidden row-span-2"
        >

            <picture className="block col-span-full">
                <source srcSet={image.desktop} media="(min-width: 768px)"/>
                <img src={image.mobile} alt={`${title} Image`} className="w-full object-cover"/>
            </picture>
            <div className="col-span-full py-1">
                <Dates date={date}/>
                <h2 className="mt-2 font-semibold text-lg">{title}</h2>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    )
}

export default BlogCard
