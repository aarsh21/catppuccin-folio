<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import { Name, Location, Profession, Bio } from '$lib/profileDetails';
	import { BriefcaseBusinessIcon, MapPinned } from 'lucide-svelte';
</script>

<div class="mt-2 flex items-center justify-self-auto text-3xl font-semibold lg:text-4xl">
	<Avatar />
	<h1 class="ml-4 font-jetbrains text-cat_tertiary">{Name}</h1>
</div>
<div class="text-md ml-[6px] mt-2 flex items-center lg:mt-4 lg:text-lg">
	<MapPinned class="h-6 w-6 text-cat_primary" />
	<h1 class="text-md ml-3 font-semibold text-cat_secondary">{Location}</h1>
</div>
<div class="text-md ml-[6px] mt-2 flex items-center lg:text-lg">
	<BriefcaseBusinessIcon class=" h-6 w-6 text-cat_primary" />
	<h1 class="text-md ml-3 font-semibold text-cat_secondary">{Profession}</h1>
</div>
<p class="text-md mb-3 mt-2">
	{Bio}
</p>
