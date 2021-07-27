<h1>Lichess Speedrun</h1>
<input value="Enable" type="button"/>
<script lang="ts">
  import { browser } from "webextension-polyfill-ts"
  let perfLookup: {[perf: string]: string} = {
    "rapid": "Rapid",
    "blitz": "Blitz",
    "bullet": "Bullet"
  };
  let perfs: string[] = ["rapid", "blitz", "bullet"]
  let ratings: {[perf: string]: (int | undefined)} = {}
  for (let perf of perfs){
    browser.storage.local.get(perf).then(
      function(rating){
        ratings[perf] = rating
      },
      function(error){
        ratings[perf] = undefined
      }
    )
  }
  console.log(ratings)
</script>

{#each perfs as perf}
  <h2>{perfLookup[perf]}</h2>
  Rating: {ratings[perf] || "?"}
{/each}
