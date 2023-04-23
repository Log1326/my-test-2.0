import { Layout } from '@/components/layout/Layout'
import { Catalog } from '@/components/pages/home/catalog/Catalog'
import { Loader } from '@/components/ui/loader/Loader'

import { api } from '@/store/api/api'
import { videoApi } from '@/store/api/video.api'

export const Studio = () => {
	const { data, isLoading } = api.useGetProfileQuery(null)
	const [removeVideo] = videoApi.useDeleteVideoMutation()
	const videos = data?.videos
	return (
		<Layout title={'Rutube | Studio'}>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : videos?.length ? (
					<Catalog
						newVideos={videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<p>Video is not found</p>
				)}
			</div>
		</Layout>
	)
}
