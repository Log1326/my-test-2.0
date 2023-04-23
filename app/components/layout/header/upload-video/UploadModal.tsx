import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, useCallback } from 'react'

import { UploadVideoFormNew } from '@/components/layout/header/upload-video/upload-video-form/UploadVideoForm'
import { IUploadModal } from '@/components/layout/header/upload-video/upload-video.interface'

import cls from './UploadVideo.module.scss'

export const UploadModal: FC<IUploadModal> = ({
	videoId,
	setIsOpen,
	isOpen
}) => {
	const handeCloseModal = useCallback(() => setIsOpen(false), [setIsOpen])
	return (
		<Transition show={isOpen} as={Fragment}>
			<Dialog onClose={handeCloseModal} className={cls.modal}>
				<Transition.Child
					as={Fragment}
					enter={'ease-out duration-300'}
					enterFrom={'opacity-0'}
					enterTo={'opacity-100'}
					leave={'ease-in duration-300'}
					leaveFrom={'opacity-100'}
					leaveTo={'opacity-0'}
				>
					<div className={cls.overlay} aria-hidden={true} />
				</Transition.Child>
				<div className={cls.wrapper}>
					<div>
						<Transition.Child
							as={Fragment}
							enter={'ease-out duration-300'}
							enterFrom={'opacity-0 scale-95'}
							enterTo={'opacity-100 scale-100'}
							leave={'ease-in duration-300'}
							leaveFrom={'opacity-100 scale-100'}
							leaveTo={'opacity-0 scale-95'}
						>
							<Dialog.Panel className={cls.window}>
								<UploadVideoFormNew
									handleCloseModal={handeCloseModal}
									videoId={videoId}
								/>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}
