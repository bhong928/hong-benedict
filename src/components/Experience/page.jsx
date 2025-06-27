
export default function Experience() {

    return(
        <section className="px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20 bg-gray-700">
            <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
            <div className="relative space-y-12 ml-6 border-l-2 border-gray-400 ">

                {/* Veoneer Experience */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>

                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Veoneer</h3>
                        <p className="italic text-sm text-gray-500">Applications Engineer Intern | April 2024 - June 2025</p>
                        <ul className="list-disc">
                            <li>Launched a new airbag module to a major OEM through crash testing and product validation.</li>
                            <li>Improved debugging with J-Script unit tests for simulated testers.</li>
                            <li>Optimized MATLAB scripts for parsing and analyzing EMC Test Dewe files.</li>
                            <li>Tested sensors (B-Pillar, Front, C/D Pillar, Pressure) for customer readiness.</li>
                        </ul>
                    </div>
                </div>

                {/* Logitech Experience */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Logitech - Blue Microphones</h3>
                        <p className="italic text-sm text-gray-500">Technician | March - July 2021</p>
                        <ul className="list-disc">
                            <li>Assembled and repaired high-end microphones with component-level soldering.</li>
                            <li>Maintained inventory using Oracle for accurate stock management.</li>
                        </ul>
                    </div>
                </div>

                {/* Audio Engineer Experience */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Blue Tint Recording Studios</h3>
                        <p className="italic text-sm text-gray-500">Head Audio Engineer | Dec 2020 - July 2021</p>
                        <ul className="list-disc">
                            <li>Mixed and mastered audio in Pro Tools and Ableton.</li>
                            <li>Led 5-12 hour recording sessions with technical precision and client satisfaction.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}