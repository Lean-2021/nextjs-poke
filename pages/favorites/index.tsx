import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/layouts/pokemon';
import { NoFavorites } from '../../components/layouts/ui';
import { localFavorites } from '../../utils';

const Favorites = () => {
  const [favoritesPokemon, setFavoritesPokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemon(localFavorites.pokemon());
  }, []);

  return (
    <Layout title="Favoritos - App">
      {favoritesPokemon.length === 0 ? (
        <NoFavorites />
      ) : (
       <FavoritePokemons pokemons={favoritesPokemon}/>
      )}
    </Layout>
  );
};

export default Favorites;
