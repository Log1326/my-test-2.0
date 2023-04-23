import cls from './Button.module.scss'
import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'

export const Button:FC<PropsWithChildren<IButton>> = (props) => {
    const {children,className,...rest} = props
    return (
        <button className={cn(cls.button,className)} {...rest}>
            {children}
        </button>
    );
};
