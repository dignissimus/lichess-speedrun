<h1>Lichess Speedrun</h1>
<button id="enable" type="button">Enable</button>

<script lang="ts" src="App.ts"></script>

{#each perfs as perf}
  <h2>{perf.name}</h2>
  <span id="{perf.key}">?</span>
{/each}

