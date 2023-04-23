import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

import { UserAvatar } from '@/components/ui/UserAvatar/UserAvatar'
import { VideoDuration } from '@/components/ui/VideoItem/VideoDuration'
import { VideoStatistic } from '@/components/ui/VideoItem/VideoStatistic'
import { IVideoitem } from '@/components/ui/VideoItem/video.item.interface'

import cls from './VideoItem.module.scss'

export const VideoItem: FC<IVideoitem> = props => {
	const { item, isSmall, removeHandler, isUpdateLink } = props
	const { push } = useRouter()
	return (
		<div
			className={cn(cls.video_item, {
				[cls.small]: isSmall
			})}
		>
			{!!removeHandler && (
				<button
					className={'absolute bottom-3 right-3 z-10'}
					onClick={() => removeHandler(item.id)}
				>
					<BiTrash className={'text-lg text-red-700'} />
				</button>
			)}
			{isUpdateLink && (
				<button
					className={'absolute bottom-3 right-11 z-10'}
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className={'text-lg text-blue-600'} />
				</button>
			)}
			<div className={cls.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={item.thumbnailPath}
						alt={item.name}
						width={185}
						height={103}
						layout='responsive'
						priority
					/>
				)}
				<VideoDuration durations={item.durations} />
				{item?.user?.avatarPath && (
					<div className='absolute right-3 -bottom-7'>
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>
			<div className={cls.information}>
				{!isSmall && (
					<div className={cls.author}>{item?.user?.name}</div>
				)}
				<Link href={`/v/${item.id}`}>
					<a className={cls.name}>{item.name}</a>
				</Link>
				<VideoStatistic
					views={item.views}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	)
}
