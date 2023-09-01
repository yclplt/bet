import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { queryClientConfig } from '@/configs'

import './App.css'
const queryClient = new QueryClient(queryClientConfig)

function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <QueryClientProvider client={queryClient}>
        Bet
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default App
