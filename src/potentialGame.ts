import { getUsername, getPlayers, lichess } from "./lichess";
import { GameEndData, GameResult } from "./interfaces";

function processResult(result: GameResult) {
  /* TODO  */
}

function processGameEnd(
  winner: string | undefined,
  username: string
): GameResult {
  if (winner === undefined || winner === null) return GameResult.Draw;
  else return winner === username ? GameResult.Win : GameResult.Loss;
}

// declare const lichess: any;

function handleGameEnd(data: GameEndData) {
  const username = getUsername();
  console.log(username);
  if (username === undefined) return;
  console.log(getPlayers());
  if (!getPlayers().includes(username)) return;
  const result = processGameEnd(data.winner, username);
  console.log(result);
  processResult(result);
}

lichess.pubsub.on("socket.in.endData", (data) =>
  handleGameEnd(<GameEndData>data)
);
