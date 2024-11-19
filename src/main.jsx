import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App"
import { GlobalStyle } from './GlobalStyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {queries: { retry: false }}
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <GlobalStyle/>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
