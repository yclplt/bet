import { api } from '@/utils'

export const getBets = async () => {
    const { data } = await api.get('/bets')
    return data
}
