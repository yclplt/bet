import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import { queryClientConfig } from '@/configs'
import Pages from './pages'
import { DataProvider } from './DataContext';

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
        <DataProvider>
          <Pages />
        </DataProvider>
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default App
