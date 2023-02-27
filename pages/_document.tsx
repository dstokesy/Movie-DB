import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
                    rel="stylesheet"
                />

                <meta
                    name="description"
                    content="Next JS site powered by content from Ocotber CMS"
                />
                <meta name="og:title" content="Headless CMS" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
