import { FC } from 'react'

import { AddComment } from '@/components/pages/video/comments/AddComment'
import { CommentItem } from '@/components/pages/video/comments/CommentItem'

import { IComment } from '@/types/comment.interface'

import { useAuth } from '@/hooks/useAuth'

import cls from './Comments.module.scss'

export const Comments: FC<{ comments: IComment[]; videoId: number }> = ({
	comments,
	videoId
}) => {
	const { user } = useAuth()
	return (
		<div className={cls.comments}>
			<h2>Comments</h2>
			<div className={cls.line} />
			{comments.length ? (
				<div className={cls.grid}>
					{comments.map(comment => (
						<CommentItem comment={comment} key={comment.id} />
					))}
				</div>
			) : (
				<p>Not Comments</p>
			)}
			<div className={cls.bottomFrom}>
				{user && <AddComment videoId={videoId} />}
			</div>
		</div>
	)
}
