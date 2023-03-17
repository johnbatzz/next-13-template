
export default function Intro() {
    const yearNow = new Date().getFullYear();
    const yearStart = 2015;
    const yearsOfExp = yearNow - yearStart;
    return (
        <>
            <div className='grid md:grid-cols-2 justify-center px-[50px]'>
                <div className="flex flex-col">
                    <h1 className='text-[3rem]'>
                        Hi,
                    </h1>
                    <h2 className='text-[1.5rem] text-yellow-600'>{`I\'m John Andrew`}</h2>
                    <h2 className='text-[2.5rem] text-yellow-600'>Batulan</h2>

                    <hr/>
                    <p>
                        A Senior Software Engineer with <strong>{yearsOfExp} years</strong> of experience in software development.
                    </p>
                    <p>
                        I have experience in both <strong>Mobile and Web Development</strong> using different frameworks, programming languages, and databases.
                    </p>
                </div>
                <div className='relative flex justify-center items-center md:ml-[20px]'>
                    <div className={`
                            animate-background bg-white from-blue-500 via-red-500 to-yellow-500 bg-gradient-to-r 
                            [animation-duration:_6s] 
                            w-[90%] sm:w-[100%] md:w-[100%] lg:w-[80%] max-w-[500px] h-[50%] mr-2 mb-10
                            rounded-[50%] absolute -rotate-45
                        `}
                    >
                        <div className={`
                                w-[98%] max-w-[500px] h-[98%] bg-gray-600 rounded-[50%] mx-auto
                            `}
                        />
                    </div>
                    
                    <img 
                        alt='my image'
                        src='/images/image1.webp'
                        className='w-[400px] z-[2]'
                    />
                </div>  
        </div>
        </>
    )
}