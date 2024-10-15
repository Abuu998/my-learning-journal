import Dates from "../../shared/Dates.tsx";

function Hero() {
    return (
        <section className="hero full-bleed text-white py-6 sm:py-8 md:py-12 min-h-svh md:min-h-screen">
            <div className="flex flex-col items-start justify-end max-md:max-w-xl">
                <Dates
                    date="july 23, 2022"
                />
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-3 text-balance">My new journey as a bootcamp student.</h1>
                <p className="mt-3 text-slate-200 sm:max-w-lg md:max-w-2xl leading-relaxed">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
            </div>
        </section>
    )
}

export default Hero
