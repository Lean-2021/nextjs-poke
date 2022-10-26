import Image from 'next/image';
import { Spacer, Text, useTheme } from '@nextui-org/react';
import React from 'react';
import styles from './NavBar.module.css';

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      className={styles['nav-container']}
      style={{ display: 'flex', backgroundColor: theme?.colors.gray50.value }}
    >
      <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='icono de la app'width={70}
      height={70} priority/>
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okémon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};
