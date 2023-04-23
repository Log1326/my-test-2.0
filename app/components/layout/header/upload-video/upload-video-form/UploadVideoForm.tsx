import { FC } from 'react'
import { Controller } from 'react-hook-form'

import { SuccessMessage } from '@/components/layout/header/upload-video/upload-video-form/SuccessMessage'
import { FooterForm } from '@/components/layout/header/upload-video/upload-video-form/footer-form/FooterForm'
import { TogglePublic } from '@/components/layout/header/upload-video/upload-video-form/toggle-public/TogglePublic'
import { useUploadVideoForm } from '@/components/layout/header/upload-video/upload-video-form/useUploadVideoForm'
import { VideoInformation } from '@/components/layout/header/upload-video/upload-video-form/video-information/VideoInformation'
import { useUploadVideoFormProps } from '@/components/layout/header/upload-video/upload-video.interface'
import { Field } from '@/components/ui/Field/Field'
import TextAria from '@/components/ui/text-aria/TextAria'
import { UploadField } from '@/components/ui/upload-field/UploadField'

import { IMediaResponse } from '@/services/media/media.interface'

export const UploadVideoFormNew: FC<useUploadVideoFormProps> = ({
	handleCloseModal,
	videoId
}) => {
	const { form, status, media } = useUploadVideoForm({
		videoId,
		handleCloseModal
	})
	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className='flex flex-wrap'
		>
			{status.isSuccess && <SuccessMessage />}
			{status.isChosen ? (
				<>
					<div className={'w-7/12 pr-6 pt-3'}>
						<Field
							{...form.register('name', {
								required: 'name is must'
							})}
							placeholder={'Name'}
							error={form.errors.name}
						/>
						<TextAria
							{...form.register('description', {
								required: 'description is must'
							})}
							placeholder={'description'}
							error={form.errors.description}
						/>
						<div className={'mt-8'}>
							<Controller
								control={form.control}
								name={'thumbnailPath'}
								render={({ field: { onChange } }) => (
									<UploadField
										folder={'thumbnailPath'}
										onChange={(value: IMediaResponse) => {
											onChange(value.url)
										}}
									/>
								)}
							/>
						</div>
						<Controller
							control={form.control}
							name={'isPublic'}
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => {
										onChange(!value)
									}}
									isEnable={!!value}
								/>
							)}
						/>
					</div>
					<div className={'w-5/12 p-3 pl-10'}>
						<VideoInformation
							fileName={media.videoFileName}
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>
					<FooterForm
						isUploaded={status.isUploaded}
						percent={status.percent}
					/>
				</>
			) : (
				<div className={'flex w-full h-full absolute left-0 top-0'}>
					<Controller
						control={form.control}
						name={'videoPath'}
						render={() => (
							<UploadField
								title={'The first, download video'}
								folder={'video'}
								onChange={media.handleUpdateVideo}
								setIsChosen={status.setIsChosen}
								setValue={status.setProgressPercentage}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}
