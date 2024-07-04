import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Catalog management for Retailors, Distributors, Brands, Marketplaces." />
        <meta name="keywords" content="Angler" />
        <meta name="author" content="Angler" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Angler" />
        <meta property="og:description" content="Catalog management for Retailors, Distributors, Brands, Marketplaces." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
