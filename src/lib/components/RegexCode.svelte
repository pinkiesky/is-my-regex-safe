<script lang="ts">
  export let regexRaw: string;

  function clearRegex(re: string) {
    if (regexRaw.startsWith('/') && regexRaw.endsWith('/')) {
      return regexRaw;
    }

    return `/${re}/`;
  }

  $: regexNormalized = clearRegex(regexRaw);
</script>

<code>{regexNormalized}</code>
