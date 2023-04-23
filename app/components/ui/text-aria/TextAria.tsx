import cls from './TextAria.module.scss'
import { forwardRef } from 'react'
import { ITextAria } from '@/components/ui/text-aria/text-aria.interface'

const TextAria = forwardRef<HTMLTextAreaElement, ITextAria>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={cls.editor} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={cls.error}>{error.message}</div>}
			</div>
		)
	}
)

TextAria.displayName = 'TextArea'
export default TextAria
