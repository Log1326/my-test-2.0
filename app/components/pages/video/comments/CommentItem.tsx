import { FC } from 'react'

import { ChannelInfoSmall } from '@/components/ui/channel-info-small/ChannelInfoSmall'

import { IComment } from '@/types/comment.interface'

import cls from './Comments.module.scss'

export const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	return (
		<div className={cls.commentItem}>
			<ChannelInfoSmall
				channel={comment.user}
				message={comment.message}
			/>
		</div>
	)
}
