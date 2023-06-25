import AppAlert from '@/components/globalComponents/AppAlert'
import AppLoader from '@/components/globalComponents/AppLoader'
import { shoplaneTheme } from '@/helper/theme'
import { store } from '@/redux/store'
import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
       <Provider store={store}>
        <ThemeProvider theme={shoplaneTheme}>
          <AppAlert />
          <AppLoader />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>

    )
}
