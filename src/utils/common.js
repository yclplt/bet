import { ApiError } from './api'
import { enqueueSnackbar } from 'notistack'

export const createUnknownSnackbar = (err) => {
    if (err instanceof ApiError) {
        enqueueSnackbar(err.message, { variant: 'error' })
    } else {
        enqueueSnackbar('Error Request', { variant: 'error' })
    }
}