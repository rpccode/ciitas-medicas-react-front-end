import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import App from './router'
// import './assets/styles/tailwind.css'
import '@/assets/styles/index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <Provider store={store} >
      <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
