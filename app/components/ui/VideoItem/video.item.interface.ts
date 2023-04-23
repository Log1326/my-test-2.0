import { IVideo } from '@/types/video.interface'

export interface IVideoitem {
	item: IVideo
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
	isSmall?: boolean
}
