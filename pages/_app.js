import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Header from "../components/Header";
import "../styles/globals.css";
import "../styles/layout.css";
import { LoginProvider } from "../contexts/LoginContext";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <ApolloProvider client={client}>
      <LoginProvider>
        <Header />
        <Component {...pageProps} />
      </LoginProvider>
    </ApolloProvider>
  );
}

export default MyApp;
