import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MdSend } from 'react-icons/md'

import { Field } from '@/components/ui/Field/Field'

import { ICommentDto } from '@/types/comment.interface'

import cls from './Comments.module.scss'
import { commentApi } from '@/store/api/comment.api'

export const AddComment: FC<{ videoId: number }> = ({ videoId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<ICommentDto>({
		mode: 'onChange'
	})
	const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation()
	const onSubmit: SubmitHandler<ICommentDto> = async data => {
		writeComment({ ...data, videoId })
			.unwrap()
			.then(() => reset())
	}
	return (
		<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={'relative'}>
				<Field
					{...register('message', {
						required: 'Message is required'
					})}
					placeholder={'enter your comment'}
					error={errors.message}
				/>
				<button
					disabled={isLoading}
					className={'text-xl	absolute right-2 top-1.5 text-purple'}
				>
					<MdSend />
				</button>
			</div>
		</form>
	)
}
