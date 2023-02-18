
export default function AboutMe() {
    return (
        <>
            <div className="relative flex flex-col justify-center items-center md:items-start my-[100px] w-full">
                <div className="px-[50px]">
                    <h1 className="text-[2rem] sm:text-[3rem] text-center sm:text-left">Basic Info</h1>
                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Name: </strong>
                        <span className="text-yellow-600">John Andrew Batulan</span>
                    </div>

                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Date of Birth: </strong>
                        <span className="text-yellow-600">February 4, 1987</span>
                    </div>

                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Country: </strong>
                        <span className="text-yellow-600">Philippines</span>
                    </div>

                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Email: </strong>
                        <span className="text-yellow-600">johnmarcl25@gmail.com</span>
                    </div>

                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Phone: </strong>
                        <span className="text-yellow-600">+63 909 930 0427</span>
                    </div>

                    <div className="text-[1rem] sm:text-[1.25rem]">
                        <strong className="tracking-wider">Hobbies: </strong>
                        <span className="text-yellow-600">Basketball, Watching Anime, Playing Mobile and PC Games, Watching Youtube Tutorials, and Researching New Technologies for Web and Mobile Development</span>
                    </div>

                    <div className="pt-8">
                        <a 
                            href="/resume/JohnAndrewBatulan.pdf"
                            download
                            className="mt-10 px-5 py-3 bg-white rounded-lg text-yellow-900"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}