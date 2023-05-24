import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const SFPro = localFont({
  src: [
    {
      path: "../public/font/SFPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/SFPro-Bold.otf",
      weight: "400",
      style: "bold",
    },
  ],
  variable: "--font-SFPro-Regular",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${SFPro.variable} `}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
