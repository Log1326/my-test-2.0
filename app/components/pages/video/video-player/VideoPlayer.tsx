import cn from 'classnames'
import { FC } from 'react'
import { BsFullscreen } from 'react-icons/bs'
import { IoMdPause, IoMdPlay } from 'react-icons/io'

import { usePlayer } from '@/hooks/usePlayer'

import cls from './VideoPlayer.module.scss'

export const VideoPlayer: FC<{ videoPath: string }> = ({ videoPath }) => {
	const { videoRef, toggleVideo, fullScreen, status } = usePlayer()
	return (
		<div className={cls.wrapper}>
			<video
				src={`${videoPath}#t=1`}
				ref={videoRef}
				className={cls.player}
				preload={'metadata'}
				onClick={toggleVideo}
			/>
			<div
				className={cn(cls.controls, {
					[cls.hide]: status.isPlaying
				})}
			>
				<button onClick={toggleVideo}>
					{status.isPlaying ? <IoMdPause /> : <IoMdPlay />}
				</button>
				<div className={cls.progressBarWrapper}>
					<div
						className={cls.progressBar}
						style={{
							width: `${status.progress}`
						}}
					/>
				</div>
				<div className={cls.timeControls}>
					<p>
						{Math.floor(status.currentTime / 60) +
							':' +
							('0' + Math.floor(status.currentTime % 60)).slice(
								-2
							)}
					</p>
					<p>/</p>
					<p>
						{Math.floor(status.videoTime / 60) +
							':' +
							('0' + Math.floor(status.videoTime % 60)).slice(-2)}
					</p>
				</div>
				<button onClick={fullScreen}>
					<BsFullscreen className='text-tiny' />
				</button>
			</div>
		</div>
	)
}
