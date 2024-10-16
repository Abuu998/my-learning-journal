import { motion } from "framer-motion"
import { BlogType } from "./CardsGrid.tsx";
import Dates from "./Dates.tsx";

type BlogCardProps = {
    blog: BlogType
}

const cardVariables = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    },
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    }
}

function BlogCard({ blog }: BlogCardProps) {
    const { title, image, description, date } = blog
    return (
        <motion.div
            className="grid grid-cols-1 grid-rows-subgrid gap-0 rounded-md overflow-hidden row-span-2"
            variants={cardVariables}
            initial="hidden"
            animate="visible"
            exit="exit"
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
        </motion.div>
    )
}

export default BlogCard
