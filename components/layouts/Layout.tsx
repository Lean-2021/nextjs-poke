import Head from 'next/head';
import React, { ReactNode } from 'react';
import { NavBar } from './ui';
import styles from './Layout.module.css';

interface props {
  title?: string;
  children: ReactNode;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Leo Marcelo" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title} , pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>
      <NavBar />
      <main className={styles['main-container']}>{children}</main>
    </>
  );
};
