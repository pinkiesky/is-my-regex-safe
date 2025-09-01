<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import Info from '$lib/components/Info.svelte';
  import MainCheck from '$lib/components/MainCheck.svelte';

  export let data: PageData;

  onMount(() => {
    const regexDisplay =
      data.rawRegex.length > 50 ? data.rawRegex.substring(0, 50) + '...' : data.rawRegex;

    const statusMap: Record<number, string> = {
      0: 'Invalid',
      1: 'Unsafe',
      2: 'Safe',
    };

    const statusText = statusMap[data.result.status] ?? 'Error';

    document.title = `Regex "${regexDisplay}" - ${statusText} | Is my /regex/ safe?`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        `Regex pattern "${regexDisplay}" is ${statusText.toLowerCase()}. ${
          statusText === 'Safe'
            ? "This regex is secure and won't cause ReDoS attacks."
            : 'This regex may be vulnerable to ReDoS attacks or has validation issues.'
        }`,
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute(
        'href',
        `https://is-my-regex-safe.zininalx.com/check/${encodeURIComponent(data.rawRegex)}`,
      );
    }
  });
</script>

<MainCheck startResult={data.result} />
<Info />
