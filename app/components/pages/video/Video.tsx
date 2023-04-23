import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Comments } from '@/components/pages/video/comments/Comments'
import { VideoDetails } from '@/components/pages/video/video-detail/VideoDetails'
import { VideoPlayer } from '@/components/pages/video/video-player/VideoPlayer'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import cls from './Video.module.scss'
import { videoApi } from '@/store/api/video.api'

export const Video = () => {
	const { query } = useRouter()
	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{ skip: !query?.id }
	)
	const [updateViews] = videoApi.useUpdateViewsMutation()
	useEffect(() => {
		query.id && updateViews(+query.id)
	}, [query.id])
	return (
		<Layout title={video.name}>
			<div className={cls.layout}>
				<VideoPlayer videoPath={video.videoPath} />
				<Comments videoId={video.id} comments={video.comments || []} />
			</div>
			<div className={cn(cls.layout, 'mt-7')}>
				<VideoDetails
					video={video}
					channel={video.user || ({} as IUser)}
				/>
				<div></div>
			</div>
		</Layout>
	)
}
