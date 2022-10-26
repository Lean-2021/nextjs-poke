import Image from "next/image";
import NextLink from "next/link";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <section
      className={styles["nav-container"]}
      style={{ display: "flex", backgroundColor: theme?.colors.gray50.value }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
        priority
      />
      <NextLink href="/" passHref >
        <section style={{display:'flex',alignItems:'center'}}>
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>
        </section>
        
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <section>
          <Text color="white">Favoritos</Text>
        </section>
      </NextLink>
    </section>
  );
};
