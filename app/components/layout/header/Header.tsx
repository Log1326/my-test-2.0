import { IconsRight } from '@/components/layout/header/icons-right/IconsRight'
import { Search } from '@/components/layout/header/search/Search'

import cls from './Header.module.scss'

export const Header = () => {
	return (
		<header className={cls.header}>
			<Search />
			<IconsRight />
		</header>
	)
}
