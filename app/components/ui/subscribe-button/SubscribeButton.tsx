import cn from 'classnames'
import { FC } from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'

import { useAuth } from '@/hooks/useAuth'

import cls from './SubscribeButton.module.scss'
import { api } from '@/store/api/api'

export const SubscribeButton: FC<{ channelIdForSubscribe: number }> = ({
	channelIdForSubscribe
}) => {
	const { user } = useAuth()
	const { data: profile } = api.useGetProfileQuery(null, {
		skip: !user
	})
	const [subscribe, { isLoading, data }] = api.useSubscribeToChannelMutation()
	const isSubscribed =
		profile?.subscriptions.some(
			sub => sub.toChannel.id === channelIdForSubscribe
		) || !!data
	if (user?.id === channelIdForSubscribe) return null
	return (
		<button
			className={cn(cls.button, {
				[cls.subscribed]: isSubscribed
			})}
			onClick={() => subscribe(channelIdForSubscribe).unwrap()}
			disabled={isLoading}
		>
			<BsPersonPlusFill />
			{isSubscribed ? 'unsubscribe' : 'subscribe'}
		</button>
	)
}
