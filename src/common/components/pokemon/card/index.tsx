import capitalise from 'lodash';
import type { FC } from 'react';
import React from 'react';
import { IPokemon } from '@interfaces/pokemon';
import styles from './styles.module.scss';

interface IPokemonCard {
  cardData: IPokemon;
}

const PokemonCard: FC<IPokemonCard> = ({ cardData }) => {
  const { id, name, sprites, types } = cardData;

  const nameCapitalized = capitalise(name);

  const typeList = types.map((t) => t.type.name).join(', ');

  return (
    <div className={styles.container}>
      <header>
        <img className={styles.avatar} src={sprites.front_default} alt="pokemon" />
      </header>

      <main className={styles.details}>
        <h1>
          #{id} <strong>{nameCapitalized}</strong>
        </h1>
        <section>Types: {typeList}</section>
      </main>
    </div>
  );
};

export default PokemonCard;
