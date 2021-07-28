<h1>Lichess Speedrun</h1>
<button id="enable" type="button">Enable</button>

<script lang="ts">
  import { perfs, displayRating, getRating, setRating } from "../../../out/lib.js"

  function enableExtension() {
    console.log(perfs)
    perfs.map(
      perf => getRating(perf).then(rval=>console.log("weird succ" + rval.toString())).catch(
        _ => setRating(perf, 600).then(_=>console.log("succ")).catch(err => console.log("err: "+err)) // TODO: Allow set to chosen default rating
      )
    )
  }

  function displayRatings() {
    perfs.map(
      perf => displayRating(perf).then(
        rating => { document.getElementById(perf.key)!.innerText = rating }
      )
    )
  }

  function onload(){
    console.log("hi")
    displayRatings()
    console.log("hi")
    enableExtension()
    console.log("hi")
    // document.getElementById("enable")!.onclick = enableExtension
  }

  
  document.body.onload = onload
    
</script>

{#each perfs as perf}
  <h2>{perf.name}</h2>
  Rating: <span id="{perf.key}">?</span>
{/each}

