import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useUploadVideoFormProps } from '@/components/layout/header/upload-video/upload-video.interface'

import { IMediaResponse } from '@/services/media/media.interface'

import { IVideoDto } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

export const useUploadVideoForm = ({
	handleCloseModal,
	videoId
}: useUploadVideoFormProps) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue,
		reset
	} = useForm<IVideoDto>({
		mode: 'onChange'
	})
	const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation()
	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				handleCloseModal()
				reset()
			})
	}
	const videoPath = watch('videoPath')
	const thumbnailPath = watch('thumbnailPath')
	const [videoFileName, setVideoFileName] = useState('')
	const handleUpdateVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}
	const [isChosen, setIsChosen] = useState(false)
	const [percent, setPercent] = useState(0)
	const [isUploaded, setIsUploaded] = useState(false)
	const setProgressPercentage = (val: number) => {
		setPercent(val)
		if (val === 100) setIsUploaded(true)
	}
	return {
		form: {
			register,
			errors,
			control,
			handleSubmit,
			onSubmit
		},
		media: {
			videoPath,
			thumbnailPath,
			videoFileName,
			handleUpdateVideo
		},
		status: {
			isSuccess,
			isChosen,
			setIsChosen,
			percent,
			isUploaded,
			setProgressPercentage
		}
	}
}
