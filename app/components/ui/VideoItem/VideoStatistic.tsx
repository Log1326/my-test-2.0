import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

import { formatNumberToK } from '@/utils/format-number-to-k'

import cls from './VideoItem.module.scss'

dayjs.extend(relativeTime)
interface VideoStatisticProps {
	views: number
	createdAt?: string
}
export const VideoStatistic: FC<VideoStatisticProps> = ({
	createdAt,
	views
}) => {
	return (
		<div className={cls.number_info}>
			<div className={cls.views}>{formatNumberToK(views)} views</div>
			{!!createdAt && (
				<>
					<div className={'mx-2'}>.</div>
					<div className={cls.data}></div>
					{dayjs(new Date(createdAt)).fromNow()}
				</>
			)}
		</div>
	)
}
