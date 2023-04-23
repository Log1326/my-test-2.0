import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from '@/components/pages/video/video.interface'

interface PlayerProps {
	isPlaying: boolean
	currentTime: number
	videoTime: number
	progress: number
}
const data = {
	isPlaying: false,
	currentTime: 0,
	videoTime: 0,
	progress: 0
}
export const usePlayer = () => {
	const videoRef = useRef<IVideoElement>(null)
	const [entity, setEntity] = useState<PlayerProps>(data)
	// const [isPlaying, setIsPlaying] = useState(false)
	// const [currentTime, setCurrentTime] = useState(0)
	// const [videoTime, setVideoTime] = useState(0)
	// const [progress, setProgress] = useState(0)
	useEffect(() => {
		const originalDuration = videoRef.current?.duration
		if (originalDuration) {
			setEntity({ ...entity, videoTime: originalDuration })
			// setVideoTime(originalDuration)
		}
	}, [videoRef.current?.duration])
	const toggleVideo = useCallback(() => {
		if (!entity.isPlaying) {
			videoRef.current?.play()
			setEntity({ ...entity, isPlaying: true })
			// setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setEntity({ ...entity, isPlaying: false })
			// setIsPlaying(false)
		}
	}, [entity.isPlaying])
	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 15
	}
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 15
	}
	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return
		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		const updateProgress = () => {
			setEntity({
				...entity,
				currentTime: video.currentTime,
				progress: (video.currentTime / entity.videoTime) * 100
			})
			// setCurrentTime(video.currentTime)
			// setProgress((video.currentTime / videoTime) * 100)
		}
		video.addEventListener('timeupdate', updateProgress)
		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [entity.videoTime])
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ':
					e.preventDefault()
					toggleVideo()
					break
				case 'f':
					fullScreen()
					break
				default:
					return
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])
	const outData = useMemo(() => {
		return {
			isPlaying: entity.isPlaying,
			progress: entity.progress,
			currentTime: entity.currentTime,
			videoTime: entity.videoTime
		}
	}, [entity])
	return {
		videoRef,
		toggleVideo,
		fullScreen,
		status: outData
	}
}
