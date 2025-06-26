import Image from "next/image";

export default function HeroSection(){

    return(
        <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Add Picture of Me */}
            <Image
                src="/images/Me&Dog.JPG"
                alt="Picture of Benedict"
                fill
                priority
                className="object-cover"
            />

        {/* Content on top of image */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-4xl font-bold">
                Hello, I am Benedict!
                </h1>
                <p className="mt-4 text-lg">
                Developer, Michigan Alumni, and Musician
                </p>
                <button className="bg-white mt-8 text-black rounded-full px-6 py-2 hover:bg-gray-300 transition">
                Discover More
                </button>
            </div>
        </section>
    )
}