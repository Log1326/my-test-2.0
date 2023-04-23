import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'

import { MediaService } from '@/services/media/media.service'

import { useAuth } from '@/hooks/useAuth'

import { errorCatch } from '@/utils/app.utils'

export const useUploadFile = (
	onChange: (...event: any) => void,
	folder?: string,
	setValue?: (val: number) => void,
	setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
	const { accessToken } = useAuth()
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) =>
			MediaService.upload(data, folder, setValue, accessToken),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				alert(errorCatch(error))
			}
		}
	)
	const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (!files?.length) return
		setIsChosen && setIsChosen(true)
		const formData = new FormData()
		formData.append('media', files[0])
		await mutateAsync(formData)
	}
	return { uploadFile }
}
