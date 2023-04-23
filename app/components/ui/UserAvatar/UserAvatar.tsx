import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import { IUser } from '@/types/user.interface'

import cls from './UserAvatar.module.scss'

export const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	isWhite,
	user
}) => {
	return (
		<Link href={`/c/${user.id}`}>
			<a>
				<span className={cn(cls.avatar, { [cls.white]: isWhite })}>
					<Image
						src={user.avatarPath || ''}
						alt={user.name}
						width={45}
						height={45}
					/>
					{user.isVerified && (
						<span className={cls.isVerified}>
							<IoIosCheckmarkCircle />
						</span>
					)}
				</span>
			</a>
		</Link>
	)
}
