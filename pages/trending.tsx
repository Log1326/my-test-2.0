import { GetStaticProps, NextPage } from 'next'

import { Trending } from '@/components/pages/trending/Trending'

import { VideoServices } from '@/services/video.services'

import { IVideo } from '@/types/video.interface'

const TrendingPage: NextPage<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await VideoServices.getMostPopular()
		return {
			props: {
				topVideos
			},
			revalidate: 60
		}
	} catch (e) {
		return {
			props: {
				topVideos: []
			}
		}
	}
}
export default TrendingPage
