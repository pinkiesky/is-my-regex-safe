<script lang="ts">
  import type { CheckResult } from '$lib/regexpChecker';
  import { RegexStatus } from '$lib/regexpChecker';
  import RegexCode from './RegexCode.svelte';

  export let result: CheckResult;

  $: resultUrl = '/check/' + encodeURIComponent(result.regexRaw);
</script>

{#if result.status === RegexStatus.invalidJsRegex}
  <p><RegexCode regexRaw={result.regexRaw} /> doesnt looks like valid JS regex.</p>
  <p>Info: <code>{result.error}</code></p>
  <p>Press <mark>Ignore and check</mark> if you know what you do (or if regex is not JS regex)</p>
{:else if result.status === RegexStatus.validationError}
  <p>Validation error: <code>{result.error || 'unknown error'}</code></p>
{:else if result.status === RegexStatus.safe}
  <RegexCode regexRaw={result.regexRaw} /> is <span class="safe">Safe</span>
  <div><a href={resultUrl}>Link to result</a></div>
{:else if result.status === RegexStatus.unsafe}
  <RegexCode regexRaw={result.regexRaw} /> is <span class="unsafe">Unsafe!</span>
  <div><a href={resultUrl}>Link to result</a></div>
{:else}
  <span>Something went wrong...</span>
{/if}
<p class="notice">
  WARNING: This check has both false positives and false negatives. Use
  <a href="https://github.com/davisjam/vuln-regex-detector" target="_blank">vuln-regex-detector</a>
  for improved accuracy.
</p>

<style>
  .notice {
    margin-bottom: 0;
    font-size: 90%;
  }

  .safe {
    color: green;
    font-weight: bold;
  }

  .unsafe {
    color: red;
    font-weight: bold;
  }
</style>
