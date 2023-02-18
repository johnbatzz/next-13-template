
export default function Footer() {
    return (
        <>
            <footer  className="grid  gap-4 md:grid-cols-2 md:place-content-center w-full border-t border-white pt-5 px-[50px] mb-10">
                <div className="leading-8 flex flex-col items-center">
                    <h3 className="text-[1.5rem] text-center">Contact Info.</h3>
                    <div>
                        <a 
                            href='tel:+639099300427' 
                            className="text-yellow-600"
                        >
                            +63 909 930 0427
                        </a>
                    </div>
                    <div>
                        <a 
                            href='mailto:johnmarcl25@gmail.com' 
                            target='_blank'
                            className="text-yellow-600"
                        >
                            johnmarcl25@gmail.com
                        </a>
                    </div>
                </div>
                <div className="leading-8  flex flex-col items-center">
                    <h3 className="text-[1.5rem] text-center">Social Media Accounts</h3>
                    <div>
                        <div>
                            <a 
                                href="https://www.linkedin.com/in/john-andrew-batulan-692419108"
                                target='_blank'
                                className="text-yellow-600"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <a 
                                href="https://twitter.com/johnmarcl"
                                target='_blank'
                                className="text-yellow-600"
                            >
                                Twitter
                            </a>
                        </div>
                        <div>
                            <a 
                                href="https://www.facebook.com/john.batzz"
                                target='_blank'
                                className="text-yellow-600"
                            >
                                Facebook
                            </a>
                        </div>
                        <div>
                            <a 
                                href="https://www.pinterest.ph/johnbatzz"
                                target='_blank'
                                className="text-yellow-600"
                            >
                                Pinterest
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}