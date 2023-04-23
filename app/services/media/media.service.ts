import { IMediaResponse } from '@/services/media/media.interface'

import { axiosClassic } from '../../api/axios'

export const MediaService = {
	async upload(
		media: FormData,
		folder?: string,
		setValue?: (val: number) => void,
		accessToken?: string
	) {
		return axiosClassic.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: {
				'Content-type': 'multipart/form-data',
				Authorization: `Bearer ${accessToken}`
			},
			onUploadProgress: progressEvent => {
				if (setValue) {
					const progress =
						(progressEvent.loaded / Number(progressEvent.total)) *
						100
					setValue(Math.ceil(progress))
				}
			}
		})
	}
}
