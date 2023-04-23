import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect } from 'react'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'

import cls from './ProfileMenu.module.scss'
import { api } from '@/store/api/api'

export const ProfileMenu: FC<{ user: { id: number; email: string } }> = ({
	user
}) => {
	const { data, isLoading, refetch } = api.useGetProfileQuery(null, {
		skip: !user
	})
	useEffect(() => {
		refetch()
	}, [])
	const { ref, isShow, setIsShow } = useOutside(false)
	const { logout } = useActions()
	if (isLoading) return null
	return (
		<div className={cls.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					src={
						data?.avatarPath ||
						'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=is&k=20&c=PJjJWl0njGyow3AefY7KVNuhkbw5r2skqFiCFM5kyic='
					}
					alt={data?.name}
					width={40}
					height={40}
					priority
				/>
				<span className={cls.name}>{data?.name}</span>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>
			{isShow && (
				<div className={cls['profile-menu']}>
					<ul>
						<li>
							<Link href={`/c/${user?.id}`}>
								<a>My Channel</a>
							</Link>
							<Link href={`/studio`}>
								<a>In Studio</a>
							</Link>
							<button onClick={logout}>Exit</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}
