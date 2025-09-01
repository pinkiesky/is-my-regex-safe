<script lang="ts">
  import { onMount } from 'svelte';
  import Info from '$lib/components/Info.svelte';
  import MainCheck from '$lib/components/MainCheck.svelte';

  onMount(() => {
    document.title = 'Check Regex Safety - Is my /regex/ safe?';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Check if your regular expressions are safe from ReDoS attacks. Enter your regex pattern to validate for security vulnerabilities.',
      );
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://ismyregexsafe.com/check');
    }
  });
</script>

<MainCheck />
<Info />
