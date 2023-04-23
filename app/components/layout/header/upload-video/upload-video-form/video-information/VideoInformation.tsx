import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import cls from './VideoInformation.module.scss'

interface VideoInformationProps {
	fileName: string
	videoId: number
	isUploaded: boolean
	thumbnailPath?: string
}
export const VideoInformation: FC<VideoInformationProps> = ({
	videoId,
	fileName,
	isUploaded,
	thumbnailPath
}) => {
	return (
		<div className={cls.info}>
			{!thumbnailPath ? (
				<div className={cls.thumbnail}>
					{!isUploaded ? 'Loading....' : 'You must download info'}
				</div>
			) : (
				<Image
					src={thumbnailPath}
					width={344}
					height={190}
					alt={''}
					layout={'responsive'}
				/>
			)}
			<div className={cls.details}>
				<div>
					<span>Video Link</span>
					<span>
						<Link href={`/v/${videoId}`}>
							<a>http://local/v/{videoId}</a>
						</Link>
					</span>
				</div>
				<div>
					<span>Filename</span>
					<span>{fileName}</span>
				</div>
			</div>
		</div>
	)
}
