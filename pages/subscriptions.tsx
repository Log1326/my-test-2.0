import { Layout } from '@/components/layout/Layout'
import { Menu } from '@/components/layout/sidebar/menu/Menu'

import { NextPageAuth } from '@/providers/private-route.interface'

import { api } from '@/store/api/api'

const MySubscriptionsPage: NextPageAuth = () => {
	const { data } = api.useGetProfileQuery(null)
	return (
		<Layout title={'My subscribers'}>
			<Menu
				title={'My subscribers'}
				items={
					data?.subscriptions.map(({ toChannel }) => ({
						title: toChannel.name,
						image: toChannel.avatarPath,
						link: `/c/${toChannel.id}`
					})) as []
				}
			/>
		</Layout>
	)
}
MySubscriptionsPage.isOnlyUser = true

export default MySubscriptionsPage
