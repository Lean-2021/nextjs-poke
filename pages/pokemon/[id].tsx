import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Grid } from '@nextui-org/react';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
   return (
    <Layout title="Algún Pokemon">
      <Grid.Container css={{marginTop:'5px'}}gap={2}>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);
  console.log(pokemons151);
  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
     pokemon:data
    },
  };
};

export default PokemonPage;
