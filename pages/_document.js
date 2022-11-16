import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            key="klaro-config"
            src="/klaro-config.js"
            type="application/javascript"
          />
          <script
            defer
            key="klaro-core"
            src="/klaro.js"
            type="application/javascript"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
