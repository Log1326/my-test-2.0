import Link from 'next/link'

import { Menu } from '@/components/layout/sidebar/menu/Menu'
import { menu } from '@/components/layout/sidebar/menu/menu.data'

import { useAuth } from '@/hooks/useAuth'

import cls from './Sidebar.module.scss'
import { api } from '@/store/api/api'

export const Sidebar = () => {
	const { user } = useAuth()
	const { data } = api.useGetProfileQuery(null, {
		skip: !user
	})
	return (
		<aside className={cls.sidebar}>
			<Link href={'/'}>
				<a className={cls.logo}>My Test 2.0</a>
			</Link>
			<Menu title={'Меню'} items={menu} />
			{user && (
				<Menu
					title={'My subscribers'}
					items={
						data?.subscriptions.map(({ toChannel }) => ({
							image: toChannel.avatarPath,
							title: String(toChannel.name),
							link: '/c/' + toChannel.id
						})) as []
					}
				/>
			)}
			<div className={cls.copy}>@ 2022 RUTUBE 2.0 TEST</div>
		</aside>
	)
}
