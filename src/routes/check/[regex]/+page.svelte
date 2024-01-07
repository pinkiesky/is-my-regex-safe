<script lang="ts">
  import Info from '$lib/components/Info.svelte';
  import MainCheck from '$lib/components/MainCheck.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<MainCheck startResult={data.result} />
<Info />
