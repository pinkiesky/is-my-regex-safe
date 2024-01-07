<script lang="ts">
  import Info from '../components/Info.svelte';
    import { regexpChecker } from '$lib/regexpChecker';
    import type { CheckResult } from '$lib/regexpChecker';

  let regexRaw: string = '';
  let result: CheckResult | null = null;

  function check() {
    result = regexpChecker(regexRaw, true);
  }
</script>

<form on:submit={check}>
  <label for="regexInput">regex</label>
  <input id="regexInput" type="text" bind:value={regexRaw} required />
  <button type="submit">is my regex safe?</button>
</form>
<div>
  <h2>Result</h2>
  {#if result !== null}
    {#if result.isSafe}
      <div>Safe</div>
    {:else}
      <div>Unsafe!</div>
    {/if}
  {/if}
</div>
<Info />