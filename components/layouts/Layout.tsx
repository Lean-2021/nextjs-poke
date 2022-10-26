import Head from 'next/head';
import React, { ReactNode } from 'react';
import { NavBar } from './ui';
import styles from './Layout.module.css';

interface props {
  title?: string;
  children: ReactNode;
}

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
      </Head>
      <NavBar />
      <main className={styles['main-container']}>
        {children}
      </main>
    </>
  );
};
