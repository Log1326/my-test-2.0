import { FC } from 'react'

import { MenuItem } from '@/components/layout/sidebar/menu/MenuItem'
import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface'
import { Line } from '@/components/ui/Line/Line'

import cls from './Menu.module.scss'

interface MenuProps {
	title: string
	items: IMenuItem[]
}
export const Menu: FC<MenuProps> = ({ items, title }) => {
	return (
		<nav className={cls.menu_sidebar}>
			<h3>{title}</h3>
			<ul>
				{items?.map(menuItem => (
					<MenuItem item={menuItem} key={menuItem.link} />
				))}
			</ul>
			<Line />
		</nav>
	)
}
