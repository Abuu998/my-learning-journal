import { profileImage } from "../../../assets"

function Introduction() {
    return (
        <section className="py-6 sm:py-8 md:py-12">
            <div className="w-20 sm:w-28 aspect-square rounded-full overflow-hidden">
                <img
                    src={profileImage}
                    alt="Abubakar's picture portrait"
                    className="block object-cover w-full"
                />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 text-balance">Hi there! My name is Aboubakar and welcome to my learning journal.</h1>
            <p className="mt-3 sm:max-w-lg md:max-w-2xl leading-relaxed">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
        </section>
    )
}

export default Introduction
