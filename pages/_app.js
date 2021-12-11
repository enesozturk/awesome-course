import "../styles/globals.css";

import { Toaster } from "react-hot-toast";

import { EditorProvider } from "../src/context/providers";
import Head from "../src/components/Head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <EditorProvider>
        <Component {...pageProps} />
        <Toaster containerClassName="mb-20" />
      </EditorProvider>
    </>
  );
}

export default MyApp;
