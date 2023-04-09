import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'animate.css'
import { UserProvider } from '../contexts/user'
import I18n from '../../i18n'
import '@fontsource/almarai'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <I18n>
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </I18n>
    )
}
