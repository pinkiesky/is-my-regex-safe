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

<section class="mainCheck">
  <form on:submit={check} class="form">
    <h1 class="title">Is my <code>/regex/</code> safe?</h1>
    <input placeholder="/regex/" id="regexInput" type="text" bind:value={regexRaw} required />
    <button type="submit" class="submit-button">
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
    padding: 2rem 1rem;
    max-width: 500px;
    border: 1px solid var(--text);
    border-radius: 10px;
    background-color: var(--bg);
  }

  .title {
    font-size: 2rem;
    line-height: 1;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .submit-button {
    margin-bottom: 0;
  }
</style>
