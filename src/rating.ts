import { browser } from 'webextension-polyfill-ts'
import Player, { Match, Outcome } from 'glicko-two'
import { Perf } from './perfs'
// import from 'node-elo'

const TAU = 0.75
const MAX_RATING_DELTA = 700
const MAX_VOLATILITY = 0.1
const DEFAULT_VOLATILITY - 0.09

export function getRating(perf: Perf): Promise<number> {
  return browser.storage.local.get(perf.key).then(
    obj => {
      let result = obj[perf.key]
      if (result === undefined){
        throw Error("Lichess Speedrun: Data does not exist");
      }
      return result
    }
  ); 
}

export function setRating(perf: Perf, rating: number): Promise<void> {
  return browser.storage.local.set({ [perf.key] : rating}) 
}

export function displayRating(perf: Perf): Promise<string> {
  return getRating(perf).then(rating => rating.toString()).catch(_ => "?");
}

export function updateRating(perf: Perf, self: Player, opp: Player, result: Outcome){
  let match = new Match(self, opp);
  switch(result){ // Not a fan of the api provided by the glicko-two library
    case Outcome.Win:
      match.reportTeamAWon()
      break;
    case Outcome.Loss:
      match.reportTeamBWon()
      break;
    case Outcome.Tie: // Not necessary but placed here for clarity
      match.reportTie()
      break;
  }
  // TODO: Update stuff in local storage
}
