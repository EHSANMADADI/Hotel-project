"use client"

import CartContextProvider from '@/Context/FoodContextProvider';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react'
import { QueryClientProvider , QueryClient } from '@tanstack/react-query';
import defaultOptions from '@/Configs/ReactQueryConfig'

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
}

const Provider = ({ children }: Props) => {

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }


  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <QueryClientProvider client={new QueryClient({defaultOptions})}>
      <CartContextProvider>
        {children}
      </CartContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default Provider;
