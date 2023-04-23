import { FC } from 'react'

import { IUploadFiled } from '@/components/ui/upload-field/upload.interface'
import { useUploadFile } from '@/components/ui/upload-field/useUploadFile'

import cls from './UploadField.module.scss'

export const UploadField: FC<IUploadFiled> = ({
	title,
	onChange,
	folder,
	setValue,
	setIsChosen
}) => {
	const { uploadFile } = useUploadFile(
		onChange,
		folder,
		setValue,
		setIsChosen
	)
	return (
		<div className={cls.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className='sr-only'>Chose file</span>
				<input type='file' onChange={uploadFile} />
			</label>
		</div>
	)
}
