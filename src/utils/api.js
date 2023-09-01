import axios from 'axios'

export class ApiError {
    message
    code
    constructor(message, code) {
        this.message = message
        this.code = code
    }
}

const dateTransformer = (data) => {
    return data
}

export const api = axios.create({
    baseURL: 'https://nesine-case-study.onrender.com/',
    transformRequest: [dateTransformer].concat(axios.defaults.transformRequest ?? []),
    withCredentials: false,
})

api.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const apiError = new ApiError('Unknown Api Error', 400)
        if (error.response) {
            apiError.message = error.response.data.message
            apiError.code = error.response.status
        }
        return Promise.reject(apiError)
    }
)