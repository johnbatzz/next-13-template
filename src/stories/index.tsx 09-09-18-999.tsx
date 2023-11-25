
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';

export default function FooterDialog(props: any) {
	const { isOpen, callback } = props;
	return (
		<>
			<Transition appear show={isOpen} as={Fragment} >
				<Dialog as="div" className="relative " onClose={callback}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 z-30 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 z-40 overflow-y-auto m-[10px]">
						<div className="flex items-center justify-center min-h-[280px] text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="pt-[10px] pb-10 px-[20px] w-full sm:w-[900px] h-[652px] overflow-visible text-left align-middle transition-all transform bg-white">
									{props.children}
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}