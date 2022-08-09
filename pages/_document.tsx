import Document, { Head, Html, Main, NextScript } from "next/document";
const isProd = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* Cloudflare Web Analytics */}
          {isProd && (
            <>
              <script
                defer
                src="https://[]"
                data-cf-beacon='{"token": "[]", "spa": true}'
              />
            </>
          )}
        </body>
      </Html>
    );
  }
}
