import cn from 'classnames'
import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'

import { Button } from '@/components/ui/button/Button'

import cls from './FooterForm.module.scss'

export const FooterForm: FC<{ percent: number; isUploaded: boolean }> = ({
	isUploaded,
	percent
}) => {
	return (
		<div className={cls.footer}>
			<div
				className={cn(cls.status, {
					[cls['icons-uploaded']]: !isUploaded
				})}
			>
				{!isUploaded ? (
					<MdUpload className={cls['icons-uploaded']} />
				) : (
					<MdCheckCircle className={cls['success-icon']} />
				)}
				<span>
					{isUploaded
						? 'Video is uploaded'
						: `Uploading:${percent}%...`}
				</span>
			</div>
			<span>
				<Button>Save</Button>
			</span>
		</div>
	)
}
