import { createUnknownSnackbar } from '@/utils'

export const queryClientConfig = {
    defaultOptions: {
        queries: {
            retry: 0,
            // refetchOnMount: false,
            // refetchOnWindowFocus: false,

            staleTime: 1000 * 60 * 60,
            onError: (err) => createUnknownSnackbar(err),
        },
        mutations: {
            onError: (err) => createUnknownSnackbar(err),
        },
    },
}