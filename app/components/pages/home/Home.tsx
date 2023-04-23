import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Catalog } from '@/components/pages/home/catalog/Catalog'
import { Discover } from '@/components/pages/home/discover/Discover'
import { IHome } from '@/components/pages/home/home.interface'

export const Home: FC<IHome> = ({ newVideos, topVideo, randomVideo }) => {
	return (
		<Layout title={'Video Host | Test'}>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}
