import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="favicon.png" />

          <link rel="manifest" href="site.webmanifest" />

          <link rel="icon" href="./logo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Steve Shammah's Portfolio Website"
          />
          {/*apple icon data*/}
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="icon" sizes="192x192" href="../public/favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;800&display=swap"
            rel="stylesheet"
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
