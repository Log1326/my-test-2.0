import { FC } from 'react'

import { Heading } from '@/components/ui/Heading/Heading'
import { VideoItem } from '@/components/ui/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import cls from './Catalog.module.scss'

interface CatalogProps {
	newVideos: IVideo[]
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
}
export const Catalog: FC<CatalogProps> = props => {
	const { removeHandler, isUpdateLink, newVideos } = props
	return (
		<div className={cls.recommended}>
			<div className={cls.top_block}>
				<Heading
					title={removeHandler ? 'My Video' : 'Recommendation'}
				/>
			</div>
			<div className={cls.catalog}>
				{newVideos.map(video => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	)
}
