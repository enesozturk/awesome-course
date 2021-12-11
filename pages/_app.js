import "../styles/globals.css";

import { Toaster } from "react-hot-toast";

import { EditorProvider } from "../src/context/providers";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <EditorProvider>
        <Component {...pageProps} />
        <Toaster containerClassName="mb-20" />
      </EditorProvider>
    </>
  );
}

export default MyApp;
