import type { AppProps } from "next/app";
import WalletProvider from "../providers/wallet";

export default function App({ Component, pageProps }: AppProps) {
  return <WalletProvider>
    <Component {...pageProps} />
  </WalletProvider>
}
