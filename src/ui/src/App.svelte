<h1>Lichess Speedrun</h1>
<input value="Enable" type="button"/>
<script lang="ts" src="../../lib.ts">
</script>

{#each perfs as perf}
  <h2>{perf.name}</h2>
  Rating: {"?"}
{/each}
