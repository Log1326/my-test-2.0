import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
//@ts-ignore
import storage from 'redux-persist/lib/storage'

import { api } from '@/store/api/api'
import { rtkQueryErrorLogger } from '@/store/middllewares/error.middleware'
import { rootReducer } from '@/store/root-reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER
				]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware)
})
export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>
