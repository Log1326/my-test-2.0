import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import { Field } from '@/components/ui/Field/Field'
import { Button } from '@/components/ui/button/Button'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import clsIconsRight from '../icons-right/IconsRight.module.scss'

import cls from './AuthForm.module.scss'
import { IAuthFields } from './auth-form.interface'
import { validEmail } from './auth.valid'

export const AuthForm = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange'
	})
	const { register: registerAction, logout, login } = useActions()
	const { isLoading } = useAuth()
	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') registerAction(data)
	}

	return (
		<div className={cls.wrapper} ref={ref}>
			<button
				className={clsIconsRight.button}
				onClick={() => setIsShow(!isShow)}
			>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			{isShow && (
				<form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is must',
							pattern: {
								value: validEmail,
								message: 'Email is not valid'
							}
						})}
						placeholder={'Email'}
						error={errors.email}
					/>
					<Field
						{...register('password', {
							required: 'password is must',
							minLength: {
								value: 6,
								message: 'The password must 6 symbols'
							}
						})}
						placeholder={'Password'}
						error={errors.password}
						type={'password'}
					/>
					<div className={'mt-5 mb-1 text-center'}>
						<Button
							onClick={() => {
								setType('login')
							}}
							disabled={isLoading}
						>
							Sign in
						</Button>
					</div>
					<button
						disabled={isLoading}
						className={cls.register}
						onClick={() => setType('register')}
					>
						Sign up
					</button>
				</form>
			)}
		</div>
	)
}
