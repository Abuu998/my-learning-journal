import { motion, AnimatePresence } from "framer-motion";
import Dates from "../../shared/Dates.tsx";

const textVars = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1.5,
            ease: "easeInOut"
        }
    }
}

function Hero() {
    return (
        <section className="hero full-bleed text-white py-6 sm:py-8 md:py-12 min-h-svh md:min-h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    className="flex flex-col items-start justify-end max-md:max-w-xl"
                    variants={textVars}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Dates
                        date="july 23, 2022"
                        className="font-light"
                    />
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-3 text-balance">My new journey as a bootcamp student.</h1>
                    <p className="mt-3 text-slate-200 sm:max-w-lg md:max-w-2xl leading-relaxed">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default Hero
