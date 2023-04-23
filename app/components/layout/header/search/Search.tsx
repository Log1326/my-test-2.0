import { BsSearch } from 'react-icons/bs'

import { VideoItem } from '@/components/ui/VideoItem/VideoItem'

import { useSearch } from '@/hooks/useSearch'

import cls from './Search.module.scss'

export const Search = () => {
	const { searchTerm, handleSearch, data, isSuccess } = useSearch()
	return (
		<div className={cls.search_top}>
			<label>
				<input
					type='text'
					placeholder={'search...'}
					value={searchTerm}
					onChange={handleSearch}
				/>
				<BsSearch />
			</label>
			{isSuccess && (
				<div className={cls.result}>
					{data?.length ? (
						data.map(video => (
							<VideoItem isSmall item={video} key={video.id} />
						))
					) : (
						<div className={'text-white'}>Video is not found</div>
					)}
				</div>
			)}
		</div>
	)
}
