const toggleFavorite = (id: number) => {
 
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonID) => pokemonID !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );
  return favorites.includes(id);
};

const pokemon =():number[]=>{
  return JSON.parse(localStorage.getItem('favorites')|| '[]');
}

export default {
  existInFavorites,
  pokemon,
  toggleFavorite,
};
