import { FC } from 'react'

import cls from './VideoItem.module.scss'

export const VideoDuration: FC<{
	durations: number
	isBottom?: boolean
}> = ({ durations, isBottom }) => {
	return <time className={isBottom ? cls.bottom : ''}>{durations} min.</time>
}
