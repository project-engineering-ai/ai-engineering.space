import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Услуги', href: '/features' },
  { title: 'Форматы работы', href: '/pricing' },
  { title: 'Блог', href: '/blog' },
  { title: 'Обсудить проект', href: '/contact', outlined: true },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <NavigationDrawer items={navItems}>
        <Navbar items={navItems} />
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </NavigationDrawer>
    </>
  );
}

export default MyApp;
