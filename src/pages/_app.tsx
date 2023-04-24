import { AppProps } from 'next/app'
// import "almace-scaffolding/_app/assets/themes/curtana/_scss/app.scss";
import "@/_styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}