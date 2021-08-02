const usernameAndRatingRegex = /([A-z0-9]+) \(([0-9]+)\)/

enum Colour {
  BLACK,
  WHITE,
  RANDOM,
}

enum GameType {
  CASUAL,
  RATED
}

enum Variant {
  /* TODO */
}

interface User {
  username: string,
  rating: number
}

interface TimeControl {
  time: number
  increment: number
}

interface Challenge {
  challenger: User
  colour: Colour
  type: GameType
  variant?: Variant
  timeControl: TimeControl
}

interface GameDescription {
  
}

function parseColour(element: Element): Colour {
  throw Error();
}

function parseNameAndRatingString(text: string): User {
  let match = text.match(usernameAndRatingRegex)!
  let username = match[1]
  let rating = parseInt(match[2], 10)
  return {
    username: username,
    rating: rating
  }
}

function parseDescription(element: HTMLElement) {
  let colour: Colour = parseColour(element.getElementsByClassName("color-icon")[0])
  let match = element.innerText
  console.log(match)
}

function parseChallenge(element: Element){
  let description = parseDescription(<HTMLElement>element.getElementsByClassName("desc")[0]!)
  let nameAndRatingString =
    parseNameAndRatingString(element
      .getElementsByClassName("head")[0]!
      .getElementsByTagName("a")[0]!
      .getElementsByTagName("name")[0]!
      .innerHTML
    )
}

function challenges(){
  return [...document.getElementsByClassName("challenge")].map(parseChallenge)
}
