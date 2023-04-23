import { FC } from 'react'

import { UserAvatar } from '@/components/ui/UserAvatar/UserAvatar'

import { IUser } from '@/types/user.interface'

import { formatNumberToK } from '@/utils/format-number-to-k'

import cls from './ChannelInfoSmall.module.scss'

interface ChannelInfoSmallProps {
	channel: IUser
	message?: string
}
export const ChannelInfoSmall: FC<ChannelInfoSmallProps> = ({
	channel,
	message
}) => {
	return (
		<div className={cls.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}
			<div>
				<div className={cls.name}>{channel.name}</div>
				<div className={cls.subscribers_count}>
					{message ||
						formatNumberToK(channel.subscribersCount) +
							' subscribers'}
				</div>
			</div>
		</div>
	)
}
