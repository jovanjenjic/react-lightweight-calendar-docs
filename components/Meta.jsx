import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { pageview } from '../utils/analytics.js';

const Meta = ({ description, title, keywords }) => {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  console.log('process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS)
  
  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" /> */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta property="og:image" content="/favicon.png" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta http-equiv="Content-Language" content="en" />
      <link rel="canonical" href={canonical} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

Meta.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
};

Meta.defaultProps = {
  description: null,
  title: null,
  keywords: null,
  canonical: null,
};

export default Meta;
