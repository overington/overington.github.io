import { AppProps } from 'next/app'
import "almace-scaffolding/_app/assets/themes/curtana/_scss/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}