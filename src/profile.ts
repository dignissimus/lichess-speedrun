import Player, { Outcome } from 'glicko-two'
import { perfs }from './lib'
let username = document.getElementById("user_tag")?.innerText

function replaceRatings(){
  for (let perf of perfs) {
    //
  }
}
let parts = window.location.href.split("/")
let usernamehash = parts.pop()!; // Can't be undefined since in the worst case, parts contains ['']
let usernameparts = usernamehash.split('#');
let profileusername = usernameparts[0];

if (username == profileusername){
  replaceRatings()
}
