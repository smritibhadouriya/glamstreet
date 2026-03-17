import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  author
}) => {
  return (
    <Helmet>
      {/* Character Encoding */}
      <meta charSet="utf-8" />

      {/* Title */}
      <title>{title}</title>

      {/* Basic SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl && (
        <meta property="og:url" content={canonicalUrl} />
      )}
      {ogImage && (
        <meta property="og:image" content={ogImage} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && (
        <meta name="twitter:image" content={ogImage} />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
