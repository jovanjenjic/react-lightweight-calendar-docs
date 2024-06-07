import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const Meta = ({ description, title, keywords, canonical }) => {
  return (
    <Head>
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
