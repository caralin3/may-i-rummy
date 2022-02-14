import { Card, CardSuit, CardValue, Deck } from '../types';

export const cardSuits: CardSuit[] = ['heart', 'spade', 'diamond', 'club'];

export const cardValues: CardValue[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king',
  'ace',
  'joker',
];

export function createDeck(deck: Deck = 'blue') {
  const cardDeck: Card[] = [];
  cardSuits.forEach((suit) => {
    cardValues.forEach((value) => {
      cardDeck.push({
        deck,
        suit,
        value,
      });
    });
  });
  return cardDeck;
}

export function shuffleDeck(deck: Card[]) {
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}
