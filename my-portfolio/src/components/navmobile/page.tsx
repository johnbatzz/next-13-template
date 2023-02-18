
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';

export default function NavMobile(props: any) {
    const { isOpen = false, currentPage = 'home', onClose = () => {} } = props;
   return (
        <>
            <Transition appear show={isOpen} as={Fragment} >
                <Dialog as="div" className="relative max-w-full" onClose={() => {onClose(currentPage)}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-30 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-40  overflow-y-auto">
                        <div className="flex items-center justify-center min-h-[280px] text-center w-full mt-[60px]">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-500"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full min-h-[280px] overflow-visible text-left align-middle transition-all transform bg-white rounded-md">
                                <Dialog.Title
                                    as="h3"
                                    className="w-full text-lg font-medium leading-6 text-gray-900"
                                >
                                    <div className='absolute right-4 top-4'>
                                    </div>
                                </Dialog.Title>
                                <div className="flex items-center justify-center">
                                <div 
                                        className=" w-full md:block md:w-auto" >
                                        <ul 
                                            className={`
                                                flex flex-col p-4 mt-4 
                                                md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 gap-0`}>
                                            <li>
                                                <a href="/" 
                                                    onClick={() =>{onClose('home')}}
                                                    className={`
                                                        ${currentPage === 'home' ? 'dark:bg-gray-700 dark:text-white' : ''}
                                                        block py-4 pl-3 pl-6 text-gray-700 rounded hover:bg-gray-100 
                                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent
                                                        dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                                                    
                                                    `}
                                                    aria-current="page"
                                                >
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" 
                                                    onClick={() =>{onClose('exp')}}
                                                    className={`
                                                        ${currentPage === 'exp' ? 'dark:bg-gray-700 dark:text-white' : ''}
                                                        block py-4 pl-3 pl-6 text-gray-700 rounded hover:bg-gray-100 
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
                                                    onClick={() =>{onClose('linkedin')}}
                                                    className={`
                                                        ${currentPage === 'linkedin' ? 'dark:bg-gray-700 dark:text-white' : ''}
                                                        block py-4 pl-3 pl-6 text-gray-700 rounded hover:bg-gray-100
                                                        md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white 
                                                        dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                                                    `}
                                                >
                                                    LinkedIn
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/johnbatzz"
                                                    target='_blank' 
                                                    onClick={() =>{onClose('github')}}
                                                    className={`
                                                        ${currentPage === 'github' ? 'dark:bg-gray-700 dark:text-white' : ''}
                                                        block py-4 pl-3 pl-6 text-gray-700 rounded hover:bg-gray-100 
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
   )
}