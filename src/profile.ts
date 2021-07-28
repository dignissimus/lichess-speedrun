import Player, { Outcome } from 'glicko-two'
import { perfs, perfPageUrl, displayRating } from './lib'

let username = document.getElementById("user_tag")?.innerText || ""

function replaceRatings(){
  for (let perf of perfs) {
    let pageUrl = perfPageUrl(username, perf)
    let ratingAnchorElement = [...document.getElementsByTagName("a")].filter(element => element.href == pageUrl)[0]
    if (ratingAnchorElement === undefined) {
      continue; // If perf doesn't exist on page, then skip it
    }
    let ratingSpan = [...ratingAnchorElement.children].filter(element => element.tagName == "SPAN")[0] // Get the first span
    let ratingElement = [...ratingSpan.children].filter(element => element.tagName == "RATING")[0] // Get the first rating element
    displayRating(perf).then(rating => ratingElement.innerHTML = `<strong>${rating}</strong>`)
  }
}
let parts = window.location.href.split("/")
let usernamehash = parts.pop()!; // Can't be undefined since in the worst case, parts contains ['']
let usernameparts = usernamehash.split('#');
let profileusername = usernameparts[0];

if (username == profileusername){
  replaceRatings()
}
