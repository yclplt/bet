import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { queryClientConfig } from '@/configs'
import Pages from './pages'
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
        <Pages />
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default App
