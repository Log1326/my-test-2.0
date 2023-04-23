import { AuthForm } from '@/components/layout/header/auth-form/AuthForm'
import { ProfileMenu } from '@/components/layout/header/profile-menu/ProfileMenu'
import { UploadVideo } from '@/components/layout/header/upload-video/UploadVideo'

import { useAuth } from '@/hooks/useAuth'

import cls from './IconsRight.module.scss'

export const IconsRight = () => {
	const { user } = useAuth()

	return (
		<div className={cls.icons}>
			{user ? (
				<>
					<ProfileMenu user={user} />
					<UploadVideo />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}
