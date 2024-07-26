<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import { Name, Location, Profession, Bio } from '$lib/profileDetails';
	import Icon from '@iconify/svelte';
</script>

<div class="mt-4 flex items-center justify-self-auto text-3xl font-semibold">
	<Avatar />
	<h1 class="ml-4">{Name}</h1>
</div>
<div class="ml-[6px] mt-4 flex items-center text-lg">
	<Icon icon="mingcute:location-2-line" class="h-6 w-6 text-ctp-peach" />
	<h1 class="ml-2">{Location}</h1>
</div>
<div class="ml-[6px] mt-2 flex items-center text-lg">
	<Icon icon="uil:suitcase-alt" class=" h-6 w-6 text-ctp-peach" />
	<h1 class="ml-2">{Profession}</h1>
</div>
<p class="mt-4">
	{Bio}
</p>
