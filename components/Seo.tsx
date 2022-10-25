import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';

interface OgImage {
  url?: string;
  width?: string;
  height?: string;
  alt?: string;
}

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  robots?: string;
  hreflang: any;
  openGraph?: {
    title?: string;
    type?: string;
    locale?: string;
    description?: string;
    site_name?: string;
    url?: string;
    images?: OgImage[];
  };
  children?: ReactNode;
}

const ogImage = ({ url, width, height, alt }: OgImage, index: number) => {
  // generate full URL for OG image url with store base URL
  const imgUrl = url;
  return (
    <Fragment key={`og:image:${index}`}>
      <meta
        key={`og:image:url:${index}`}
        property="og:image"
        content={imgUrl}
      />
      <meta
        key={`og:image:width:${index}`}
        property="og:image:width"
        content={width}
      />
      <meta
        key={`og:image:height:${index}`}
        property="og:image:height"
        content={height}
      />
      <meta
        key={`og:image:alt:${index}`}
        property="og:image:alt"
        content={alt}
      />
    </Fragment>
  );
};

const Seo: FC<Props> = ({
  title,
  description,
  keywords,
  canonical,
  openGraph,
  robots,
  hreflang,
  children,
}) => {
  return (
    <Head>
      <title key={title}>{title}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': process.env.NEXT_PUBLIC_URL_ENVIROMENT,
            '@type': 'Organization',
            url: process.env.NEXT_PUBLIC_URL_ENVIROMENT,
            logo: `${process.env.NEXT_PUBLIC_URL_ENVIROMENT}/logo/384x384.png`,
          }),
        }}
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical !== undefined && (
        <link key={canonical} rel="canonical" href={canonical} />
      )}
      {hreflang !== undefined && (
        <link
          rel="alternate"
          hrefLang={hreflang.hreflang}
          href={hreflang.href}
        />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Juegalo" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta
        property="og:image"
        content="https://ia.media-imdb.com/images/rock.jpg"
      />
      <meta property="og:image.alt" content="'imagen para cuando se comparta" />
      {children}
    </Head>
  );
};

export default Seo;

Seo.defaultProps = {
  title: 'Casino - Slot',
  description: 'Tus juegos favoritos de Casino',
};
