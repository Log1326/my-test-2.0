import { IField } from './field.interface'
import { forwardRef } from 'react'
import cls from './Field.module.scss'

export const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cls.input} style={style}>
				<input ref={ref} type={type} {...rest} />
				{error && <div className={cls.error}>{error.message}</div>}
			</div>
		)
	}
)
Field.displayName = 'Field'
