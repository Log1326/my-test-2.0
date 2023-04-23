import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { UserAvatar } from '@/components/ui/UserAvatar/UserAvatar'
import { VideoDuration } from '@/components/ui/VideoItem/VideoDuration'
import { VideoStatistic } from '@/components/ui/VideoItem/VideoStatistic'

import { IVideo } from '@/types/video.interface'

import cls from './VideoItem.module.scss'

export const LargeVideoItem: FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={cn(cls.video_item, cls.large_item)}>
			<div className={cls.thumbnail}>
				{video.thumbnailPath && (
					<Image
						src={video.thumbnailPath}
						alt={video.name}
						layout='fill'
						className={cls['bg-image']}
						priority
					/>
				)}
				<VideoDuration durations={video.durations} />
				<div className={cls.information}>
					<Link href={`/v/${video.id}`}>
						<a className={cls.name}>{video.name}</a>
					</Link>
					{video?.user?.avatarPath && (
						<UserAvatar user={video.user} isWhite />
					)}
					<div className={cls.author}>{video.user?.name}</div>
					<VideoStatistic
						views={video.views}
						createdAt={video.createdAt}
					/>
				</div>
			</div>
		</div>
	)
}
