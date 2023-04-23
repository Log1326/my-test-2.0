import { Switch } from '@headlessui/react'
import { FC } from 'react'

export const TogglePublic: FC<{
	clickHandler: () => void
	isEnable: boolean
}> = ({ clickHandler, isEnable }) => {
	return (
		<Switch
			checked={isEnable}
			onChange={clickHandler}
			className={`mt-4 ${
				isEnable ? 'bg-violet-800' : 'bg-gray-500'
			} relative inline-flex h-6 w-11 items-center rounded-full`}
		>
			<span
				className={`${
					isEnable ? 'translate-x-6' : 'translate-x-1'
				} inline-block h-4 w-4 transform rounded-full bg-white transition`}
			/>
		</Switch>
	)
}
