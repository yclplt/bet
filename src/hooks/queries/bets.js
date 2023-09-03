import services from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useBets = () => {
    return useQuery(['bets'], () => services.bets.getBets())
}
