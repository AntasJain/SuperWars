export const shuffleCards = (characters, deckSize) => {
  const shuffled = [...characters];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const deckPlayer = shuffled.slice(0, deckSize / 2);
  const deckComputer = shuffled.slice(deckSize / 2, deckSize);
  return { deckPlayer, deckComputer };
};
