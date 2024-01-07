<script lang="ts">
  import { regexpChecker, RegexStatus } from '$lib/regexpChecker';
  import type { CheckResult } from '$lib/regexpChecker';
  import Result from './Result.svelte';

  export let startResult: CheckResult | null = null;

  let regexRaw: string = startResult?.regexRaw || '';
  let result: CheckResult | null = startResult;

  function check() {
    const validate = !result || result.status !== RegexStatus.invalidJsRegex;
    result = regexpChecker(regexRaw, validate);
  }
</script>

<section class='mainCheck'>
  <form on:submit={check} class='form'>
    <h3>Is my <code>/regex/</code> safe?</h3>
    <input placeholder="/regex/" id="regexInput" type="text" bind:value={regexRaw} required />
    <button type="submit">
      {#if result?.regexRaw === regexRaw && result?.status === RegexStatus.invalidJsRegex}
        Ignore and check
      {:else}
        Check
      {/if}
    </button>
  </form>
  {#if result !== null}
    <div>
      <Result {result} />
    </div>
  {/if}
</section>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }

  #regexInput {
    font-family: monospace;
    width: 100%;
  }

  .mainCheck {
    margin: 150px auto;
    max-width: 500px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: #131313;
  }
</style>
