'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const Provider = ({children}:{children:ReactNode}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
        {children}
    </QueryClientProvider>
  )
}

export default Provider
