import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Catalog } from '@/components/pages/home/catalog/Catalog'

import { IVideo } from '@/types/video.interface'

export const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<Layout title={'Trending | Recommendation'}>
			<Catalog newVideos={topVideos} />
		</Layout>
	)
}
