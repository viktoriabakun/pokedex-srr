import capitalise from 'lodash';
import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { IPokemon } from '@interfaces/pokemon';
import styles from './styles.module.scss';

interface IPokemonCard {
  cardData: IPokemon;
}

const PokemonCard: FC<IPokemonCard> = ({ cardData }) => {
  const { id, name, sprites, types } = cardData;

  const nameCapitalized = capitalise(name);
  const typeList = types.map((t) => t.type.name).join(', ');
  const pokemonImg = sprites?.other['official-artwork'].front_default;
  const pokemonGif = sprites?.versions['generation-v']['black-white']['animated']['front_default'];

  const [avatar, setAvatar] = useState(pokemonImg);

  const setGifAvatar = useCallback(() => setAvatar(pokemonGif), [pokemonGif]);
  const setImgAvatar = useCallback(() => setAvatar(pokemonGif), [pokemonGif]);

  return (
    <div className={styles.itemContainer} onMouseEnter={setGifAvatar} onMouseLeave={setImgAvatar}>
      <h2 className={`${styles.ballHalf} ${styles.top}`}>
        #{id} <strong>{nameCapitalized}</strong>
      </h2>

      <div className={styles.avatarContainer}>
        <img src={avatar} className={styles.avatar} alt="pokemon" />
      </div>

      <p className={`${styles.ballHalf} ${styles.bottom}`}>{typeList}</p>
    </div>
  );
};

export default PokemonCard;
