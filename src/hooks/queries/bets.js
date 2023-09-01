import services from '@/services'
import { useQuery } from '@tanstack/react-query'

export const useEmail = () => {
    return useQuery(['bets'], () => services.bets.get())
}
