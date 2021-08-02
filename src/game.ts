import { getUsername } from './website'
import { displayRating } from './rating'
import { Rapid } from "./perfs"

type ElementCondition = (element: HTMLAnchorElement)=>boolean 

function and(...functions: ElementCondition[]){
  return function(element: HTMLAnchorElement) { return !functions.map(func => func(element)).includes(false) }
}

function not(func: ElementCondition): ElementCondition{
  return function(element: HTMLAnchorElement){ return !func(element) }
}

function linksToUserPage(element: HTMLAnchorElement): boolean {return element.href ===`https://lichess.org/@/${getUsername()}`} 
function isNoOpener(element: HTMLAnchorElement): boolean { return element.rel === "noopener" }

function replaceClockRating(){
  let element = [...document.getElementsByTagName("a")].filter(and(linksToUserPage, isNoOpener))[0]
  let parent = element?.parentElement
  if(parent !== undefined && parent !== null){
    let ratingElement = [...parent.children].filter(element => element.tagName === "RATING")[0]
    if(ratingElement !== undefined){
      displayRating(Rapid).then(rating => ratingElement.innerHTML = rating.toString())
    }
  }
}

function replaceSideBarRating(){
  let anchorElement = [...document.getElementsByTagName("a")].filter(and(linksToUserPage/*TODO: finish off*/))
}

function updateRatingAfterGameEnd(){
  /* TODO */
}

let lichess: any;
lichess.pubsub.on("socket.in.endData", updateRatingAfterGameEnd)

replaceClockRating()
replaceSideBarRating()
