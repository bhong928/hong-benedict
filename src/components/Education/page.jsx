
export default function Education() {

    return(
        <section className="p-5 md:p-20 bg-[#2c2c2c]">
            <h2 className="text-3xl font-bold mb-12 text-[#F1F0EA] text-center md:text-left">Education</h2>
            <div className="relative space-y-12 ml-2 border-l-2 border-gray-400">

                {/* University of Michigan */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#F1F0EA] border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">University of Michigan - Dearborn</h3>
                        <p className="italic text-sm text-gray-500">B.S. in Software Engineering | August 2022 - June 2025</p>
                        <ul className="list-disc">
                            <li>Focused on web development, embedded systems, and real-world applications.</li>
                            <li>Senior design project included React + Firebase web app for wearable health tech.</li>
                            <li>Worked on team-based projects using GitHub and agile workflows.</li>
                        </ul>
                    </div>
                </div>

                {/* CRAS Audio Certification */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#F1F0EA] border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Conservatory of Recording Arts and Sciences</h3>
                        <p className="italic text-sm text-gray-500">Audio Engineering Certificate | Novemeber 2019 - December 2020</p>
                        <ul className="list-disc">
                            <li>Trained in Pro Tools, signal flow, and studio engineering techniques.</li>
                            <li>Hands-on projects in music production, mixing, and mastering.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}