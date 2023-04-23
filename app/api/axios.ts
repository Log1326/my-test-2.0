import axios from 'axios'
import * as process from 'process'

import { getContentType } from '@/utils/app.utils'

export const API_URL = `${process.env.APP_URL}/api`
export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
