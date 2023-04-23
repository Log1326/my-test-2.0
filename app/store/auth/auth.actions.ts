import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { IAuthFields } from '@/components/layout/header/auth-form/auth-form.interface'

import { IAuthData } from '@/services/auth/auth.helper'
import { AuthServices } from '@/services/auth/auth.services'

import { toastError } from '@/utils/app.utils'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const res = await AuthServices.register(email, password)
			toastr.success('Sign up', 'successfully')
			return res
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)
export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const res = await AuthServices.login(email, password)
			toastr.success('Sign in', 'successfully')
			return res
		} catch (e) {
			toastError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)
export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
