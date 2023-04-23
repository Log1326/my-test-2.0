import { FC } from 'react'

import cls from './Heading.module.scss'

interface HeadingProps {
	title: string
}
export const Heading: FC<HeadingProps> = ({ title }) => {
	return (
		<div className={cls.title}>
			<h2>{title}</h2>
		</div>
	)
}
