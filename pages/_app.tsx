import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren, useEffect } from 'react';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import WaveCta from 'components/WaveCta';
import { NavItems } from 'types';
import { Lang, LangContext, POST_SLUG_ALTERNATES, lp, translations } from 'i18n';

function getLang(router: { asPath: string; pathname: string }): Lang {
  return router.asPath === '/en' || router.asPath.startsWith('/en/') ? 'en' : 'ru';
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const lang = getLang(router);
  const t = translations[lang];

  const navItems: NavItems = [
    { title: t.nav.features, href: lp(lang, '/features') },
    { title: t.nav.blog, href: lp(lang, '/blog') },
    { title: t.nav.contact, href: lp(lang, '/contact'), outlined: true },
  ];

  // переключатель языка: текущий путь -> парный в другой локали
  let pathNoLang = router.asPath.split('?')[0].replace(/^\/en(?=\/|$)/, '') || '/';
  // у переведённых постов slug'ы разные — маппим на парный
  const blogMatch = pathNoLang.match(/^\/blog\/([^/]+)\/?$/);
  if (blogMatch) {
    const alt = POST_SLUG_ALTERNATES[blogMatch[1]] ?? blogMatch[1];
    pathNoLang = `/blog/${alt}`;
  }
  const switchHref = lang === 'ru' ? lp('en', pathNoLang) : pathNoLang;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ColorModeScript />
      <GlobalStyle />

      <NavigationDrawer items={navItems}>
        <Navbar items={navItems} lang={lang} switchHref={switchHref} />
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </NavigationDrawer>
    </LangContext.Provider>
  );
}

export default MyApp;
