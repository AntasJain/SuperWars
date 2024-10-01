export const shuffleCards = (characters) => {
  const shuffled = [...characters];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const deckPlayer = shuffled.slice(0, 10);
  const deckComputer = shuffled.slice(10, 20);
  return { deckPlayer, deckComputer };
};
