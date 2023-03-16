
'use client'
import { useState } from "react"
import NavMobile from '../navmobile/page';

export function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');
    const toggle = () => {
        setIsOpen(prev => !prev);
    }
    const onClose = (data:string) => {
        setIsOpen(false);
        setCurrentPage(data);
    }
    return (
        <>
            <nav 
                className="sticky shadow-xl top-[-1px] z-40 bg-white border-black-200 dark:bg-gray-900 dark:border-black"
            >
                <div 
                    className="pl-4 sm:pl-0 container h-16 flex flex-wrap items-center justify-between mx-auto"
                >
                    <a href="#" 
                        className="flex items-center">
                        <img src="/logo.png"
                            className="h-[40px] w-[40px] mr-3" alt="John Andrew Batulan Logo" />
                        <span 
                            className="hidden sm:inline-block self-center text-xl font-semibold whitespace-nowrap dark:text-white">John</span>
                    </a>
                    <button 
                        onClick={toggle}
                        data-collapse-toggle="navbar-dropdown" 
                        type="button" 
                        className={`
                            inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg 
                            md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
                        `} 
                        aria-controls="navbar-dropdown" 
                        aria-expanded="false"
                    >
                        <span 
                            className="sr-only">Open main menu</span>
                        <svg 
                            className="w-8 h-8" 
                            aria-hidden="true" 
                            fill="currentColor"
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                                clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                    <div 
                        className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul 
                            className={`
                                flex flex-col p-4 mt-4 border border-gray-100 rounded-lg 
                                md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0`}>
                            <li>
                                <a href="/" 
                                    onClick={() => onClose('home')}
                                    className={`
                                        ${currentPage === 'home' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                        block py-2 pl-3 pr-4 text-whites rounded 
                                        md:p-0  md:dark:bg-transparent" 
                                        aria-current="page
                                    `}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    onClick={() => onClose('exp')}
                                    className={`
                                        ${currentPage === 'exp' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                        block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                                        dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                    `}
                                >
                                    Experiences
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/john-andrew-batulan-692419108" 
                                    target='_blank'
                                    rel="noreferrer"
                                    onClick={() => onClose('linkedin')}
                                    className={`
                                        ${currentPage === 'linkedin' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                        block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                                        dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                    `}
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/johnbatzz" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={() => onClose('github')}
                                    className={`
                                        ${currentPage === 'github' ? 'md:dark:text-white' : 'dark:text-gray-400'}
                                        block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 
                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                        dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white `
                                    }
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                isOpen && <NavMobile currentPage={currentPage} isOpen={isOpen} onClose={onClose}/>
            }
        </>
    )
}