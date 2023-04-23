import dayjs from 'dayjs'
import { FC } from 'react'
import { HiCalendar } from 'react-icons/hi'
import { IoMdEye } from 'react-icons/io'
import { RiHeart2Fill } from 'react-icons/ri'

import { ChannelInfoSmall } from '@/components/ui/channel-info-small/ChannelInfoSmall'
import { SubscribeButton } from '@/components/ui/subscribe-button/SubscribeButton'

import { IUser } from '@/types/user.interface'
import { IVideo } from '@/types/video.interface'

import { formatNumberToK } from '@/utils/format-number-to-k'

import cls from './VideoDetails.module.scss'
import { videoApi } from '@/store/api/video.api'

export const VideoDetails: FC<{ video: IVideo; channel: IUser }> = ({
	channel,
	video
}) => {
	const [updateLikes, { isLoading: isLikeLoading }] =
		videoApi.useUpdateLikesMutation()
	return (
		<div className={cls.detail}>
			<div>
				<ChannelInfoSmall channel={channel} />
				<h1>{video.name}</h1>
				<article className={cls.article}>{video.description}</article>
			</div>
			<div className={'pt-2'}>
				<div className={cls.wrapper_button}>
					{video.user?.id && (
						<SubscribeButton
							channelIdForSubscribe={video.user?.id}
						/>
					)}
					<button
						className={cls.like_button}
						disabled={isLikeLoading}
						onClick={() => updateLikes(video.id)}
					>
						<RiHeart2Fill />
						{video.likes > 1 ? 'Likes' : 'Like'}
					</button>
				</div>
				<div className={cls.number_info}>
					<div>
						<IoMdEye />
						<span>
							{formatNumberToK(video.views)}{' '}
							{video.views > 1 ? 'views' : 'view'}
						</span>
					</div>
					<div>
						<RiHeart2Fill />
						<span>
							{formatNumberToK(video.likes)}
							{video.likes > 1 ? ' Likes' : ' Like'}
						</span>
					</div>
					<div>
						<HiCalendar />
						<span>
							{dayjs(new Date(video.createdAt)).fromNow()} views
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
