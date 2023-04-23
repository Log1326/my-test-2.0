import { useState } from 'react'
import { HiUpload } from 'react-icons/hi'

import { UploadModal } from '@/components/layout/header/upload-video/UploadModal'

import clsIcon from '../icons-right/IconsRight.module.scss'

import { videoApi } from '@/store/api/video.api'

export const UploadVideo = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number>(0)
	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()
	return (
		<>
			<button
				className={clsIcon.button}
				disabled={isLoading}
				onClick={() => {
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(+id)
							setIsOpen(true)
						})
				}}
			>
				<HiUpload />
			</button>
			<UploadModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				videoId={videoId}
			/>
		</>
	)
}
