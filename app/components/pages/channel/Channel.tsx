import { FC } from 'react'

import { Layout } from '@/components/layout/Layout'
import { Catalog } from '@/components/pages/home/catalog/Catalog'
import { ChannelInfoSmall } from '@/components/ui/channel-info-small/ChannelInfoSmall'
import { SubscribeButton } from '@/components/ui/subscribe-button/SubscribeButton'

import { IUser } from '@/types/user.interface'

interface ChannelProps {
	channel: IUser
}
export const Channel: FC<ChannelProps> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className='mb-10 w-1/2 '>
				<div className='flex items-center justify-around gap-12 '>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className='text-gray-500 mt-3 p-6'>
					{channel.description}
				</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	)
}
