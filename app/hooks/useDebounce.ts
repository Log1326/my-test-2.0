import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number) => {
	const [debounceValue, setDebounceValue] = useState<T>(value)
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		return () => clearInterval(handler)
	}, [value, delay])
	return debounceValue
}