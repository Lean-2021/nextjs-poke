import React from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props{
    pokemonId:number,
}

export const FavoriteCardPokemon:React.FC<Props> = ({pokemonId}) => {

const router = useRouter();

const onFavoriteClicked =(id:string)=>{
    router.push(`/pokemon/${id}`)
}

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}onClick={()=>onFavoriteClicked(`${pokemonId}`)}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height={140}
          alt="Pokemon image"
        />
      </Card>
    </Grid>
  );
};
