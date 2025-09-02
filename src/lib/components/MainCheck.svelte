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

<a
  href="https://github.com/pinkiesky/is-my-regex-safe"
  target="_blank"
  rel="noopener noreferrer"
  class="github-button"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
  View on GitHub
</a>

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

  .github-button {
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #24292e;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s ease;
    white-space: nowrap;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .github-button:hover {
    background-color: #444d56;
    color: white;
  }

  .github-button svg {
    flex-shrink: 0;
  }

  .submit-button {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    .github-button {
      top: 1rem;
      right: 1rem;
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }

    .github-button svg {
      width: 16px;
      height: 16px;
    }

    .title {
      font-size: 1.5rem;
    }
  }
</style>
