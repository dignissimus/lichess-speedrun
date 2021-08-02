import { perfs } from "../../../out/perfs"
import { displayRating, getRating, setRating } from "../../../out/rating"
function enableExtension() {
  let button = document.getElementById("enable")!
  // Maybe I should use .toggle here TODO
  if(button.classList.contains("enabled")){
    button.classList.remove("enabled")
    button.classList.add("disabled")
  }
  else {
    button.classList.remove("disabled")
    button.classList.add("enabled")
    perfs.map(
        perf => getRating(perf).catch(
          _ => {
            console.log("Trying to set")
            setRating(perf, 600) // TODO: Allow set to chosen default rating
            displayRatings()
          }
        )
    )
  } 
}
function displayRatings() {
  perfs.map(
    perf => displayRating(perf).then(
      rating => { document.getElementById(perf.key)!.innerText = `Rating: ${rating.toString()}` }
    )
  )
}
function onload(){
  displayRatings()
  document.getElementById("enable")!.onclick = enableExtension
}

document.body.onload = onload
