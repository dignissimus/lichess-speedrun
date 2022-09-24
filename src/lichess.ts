export function getPlayers(): string[] {
  const ruserLinks = document.querySelectorAll("div.ruser a");

  // Minor hack, if playing against a non-user i.e. stockfish do not consider this a game
  if (ruserLinks.length !== 2) return [];
  return Array.from(ruserLinks).map(
    (anchor) => (<HTMLAnchorElement>anchor).innerText
  );
}

export const getUsername = () => document.body.dataset.user;

interface Pubsub {
  on(key: string, callable: (data: unknown) => void): void;
}

interface Lichess {
  pubsub: Pubsub;
}

export declare const lichess: Lichess;
