import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import { AuthProvider } from '@/providers/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/private-route.interface'

import '../app/styles/globals.scss'

import { persistor, store } from '@/store/store'

type TypeAppProps = AppProps & TypeComponentAuthFields
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: TypeAppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextProgressBar
				color='#FF7652'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<Component {...pageProps} />
						<ReduxToastrLib
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={4000}
							transitionIn={'fadeIn'}
							transitionOut={'fadeOut'}
						/>
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
