import { Perf } from './perfs'
import { browser } from 'webextension-polyfill-ts'
import { Player, Outcome, Match } from 'glicko-two'
// import from 'node-elo'

const TAU = 0.75
const MAX_RATING_DELTA = 700
const MAX_VOLATILITY = 0.1
const DEFAULT_VOLATILITY = 0.09

export enum DataType {
  RATING,
  VOLATILITY,
  RATING_DEVIATION
}


export namespace DataType {
  export function affix(type: DataType): string {
    switch(type){
      case DataType.RATING:
        return "-rating"
      case DataType.VOLATILITY:
        return "-volatility"
      case DataType.RATING_DEVIATION: // Unnecesary but written for clarity
        return "-rating-deviation"
    }
  }

  export function getLookupName(type: DataType, perf: Perf): string{
    return perf.key + DataType.affix(type)
  }
}

function getData(perf: Perf, type: DataType, defaultValue?: number): Promise<number>{
  let lookupName = DataType.getLookupName(type, perf)
  return browser.storage.local.get(lookupName).then(
    obj => {
      let result = obj[lookupName]
      if (result === undefined) {
        if(defaultValue !== undefined){
          setData(perf, type, defaultValue)
          return defaultValue
        }
        else
          throw Error("Lichess Speedrun: Data does not exist");
      }
      return result
    }
  ); 
}

export function setData(perf: Perf, type: DataType, data: number): Promise<void> {
  return browser.storage.local.set({[DataType.getLookupName(type, perf)]: data}) 
}

export function getRating(perf: Perf): Promise<number> {
  return getData(perf, DataType.RATING)
}

export function setRating(perf: Perf, rating: number): Promise<void> {
  return setData(perf, DataType.RATING, rating)
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

  setData(perf, DataType.RATING, self.rating)
  setData(perf, DataType.RATING_DEVIATION, self.ratingDeviation)
  setData(perf, DataType.VOLATILITY, self.volatility)

}
