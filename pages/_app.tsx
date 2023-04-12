import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
//@ts-ignore
import { FC } from "react";

interface AppProps {
  Component: FC;
  pageProps: Record<any, any>;
}

const App: FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
