import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface'

import { useAuth } from '@/hooks/useAuth'

import cls from './Menu.module.scss'

interface MenuItemProps {
	item: IMenuItem
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
	const { user } = useAuth()
	const { asPath } = useRouter()
	if (item.link === '/my-channel')
		if (!user) return null
		else item.link = `/c/${user?.id}`
	return (
		<li>
			<Link href={item.link}>
				<a className={asPath === item.link ? cls.active : ''}>
					<span className={item.image ? cls.image : ''}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image
								src={item.image}
								width={40}
								height={40}
								alt={item.title}
							/>
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	)
}
