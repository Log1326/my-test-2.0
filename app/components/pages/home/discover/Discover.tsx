import { FC } from 'react'

import { LargeVideoItem } from '@/components/ui/VideoItem/LargeVideoItem'

import { IVideo } from '@/types/video.interface'

import cls from './Discover.module.scss'

interface DiscoverProps {
	topVideo: IVideo
	randomVideo: IVideo
}
export const Discover: FC<DiscoverProps> = ({ topVideo, randomVideo }) => {
	return (
		<div className={cls.discovery}>
			<div className={cls.top_video}>
				<LargeVideoItem video={topVideo} />
			</div>
			<div className={cls.random_video}>
				<LargeVideoItem video={randomVideo} />
			</div>
		</div>
	)
}
