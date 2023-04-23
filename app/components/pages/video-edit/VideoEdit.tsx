import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

import { Layout } from '@/components/layout/Layout'
import { TogglePublic } from '@/components/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic'
import { VideoInformation } from '@/components/layout/header/upload-video/upload-video-form/video-information/VideoInformation'
import { Field } from '@/components/ui/Field/Field'
import { Button } from '@/components/ui/button/Button'
import { Loader } from '@/components/ui/loader/Loader'
import TextAria from '@/components/ui/text-aria/TextAria'
import { UploadField } from '@/components/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media/media.interface'

import { IVideoDto } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

export const VideoEdit = () => {
	const { query, push } = useRouter()
	const videoId = Number(query.id)
	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	})

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IVideoDto>({
		mode: 'onChange'
	})
	useEffect(() => {
		if (!watch('name') && data) {
			setValue('name', data.name)
			setValue('description', data.description)
			setValue('videoPath', data.videoPath)
			setValue('thumbnailPath', data.thumbnailPath)
			setValue('isPublic', data.isPublic)
		}
	}, [data, setValue, watch])
	const [updateVideo, { isLoading: isUpdateLoading }] =
		videoApi.useUpdateVideoMutation()
	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(async () => {
				toastr.success('Status', 'Video update')
				await push('/studio')
			})
	}
	return (
		<Layout title={'Video Editing'}>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : (
					<form
						className='flex flex-wrap'
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className='w-7/12 pr-6 pt-8'>
							<Field
								{...register('name', {
									required: 'Name is required'
								})}
								placeholder={'Name'}
								error={errors.name}
							/>
							<TextAria
								{...register('description', {
									required: 'Description is required'
								})}
								placeholder={'Description'}
								error={errors.description}
							/>
							<div className='mt-8 flex items-center'>
								<span className='text-white text-xl '>
									Image:
								</span>

								<Controller
									control={control}
									name='thumbnailPath'
									render={({ field: { onChange } }) => (
										<UploadField
											folder={'thumbnailPath'}
											onChange={(
												value: IMediaResponse
											) => {
												onChange(value.url)
											}}
										/>
									)}
								/>
							</div>
							<div className='mt-8 flex items-center'>
								<span className='text-white text-xl'>
									Video:
								</span>
								<Controller
									control={control}
									name='videoPath'
									render={({ field: { onChange } }) => (
										<UploadField
											folder='thumbnailPath'
											onChange={(
												value: IMediaResponse
											) => {
												onChange(value.url)
											}}
										/>
									)}
								/>
							</div>
							<div className='mt-8'>
								<Controller
									control={control}
									name='isPublic'
									render={({
										field: { onChange, value }
									}) => (
										<TogglePublic
											clickHandler={() =>
												onChange(!value)
											}
											isEnable={!!value}
										/>
									)}
								/>
							</div>
						</div>
						<div className='w-5/12 p-3 pl-10'>
							<VideoInformation
								fileName={''}
								videoId={videoId}
								isUploaded
								thumbnailPath={watch('thumbnailPath')}
							/>
						</div>
						<div className={'mt-10'}>
							<Button>
								{isUpdateLoading ? 'please wait' : 'save'}
							</Button>
						</div>
					</form>
				)}
			</div>
		</Layout>
	)
}
