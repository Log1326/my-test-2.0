import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'
import { Header } from '@/components/layout/header/Header'
import cls from './Layout.module.scss'

interface LayoutProps {
	title:string
}
export const Layout: FC<PropsWithChildren<LayoutProps>> = (props) => {
	const {title,children} = props;
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={cls.main}>
				<Sidebar />
				<section className={cls.content}>
					<Header />
					<div className={cls.wrapper}>
						{children}
					</div>
				</section>
			</main>
		</>
	)
}
