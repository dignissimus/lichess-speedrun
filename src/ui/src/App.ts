import { perfs, displayRating, getRating, setRating } from "../../../out/perfs.js"
function enableExtension() {
  perfs.map(
    perf => getRating(perf).catch(
      _ => {
        setRating(perf, 600) // TODO: Allow set to chosen default rating
        displayRatings()
      }
    )
  )
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
