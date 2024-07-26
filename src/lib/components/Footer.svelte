<script lang="ts">
	import { Links } from '$lib/profileDetails';
	import Icon from '@iconify/svelte';
</script>

<div class="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
	{#each Links as link}
		<a
			class="flex items-center justify-center gap-x-2 text-sm font-bold hover:text-ctp-sky"
			href={link.url}
		>
			<Icon icon="mingcute:link-fill" class="h-4 w-4 text-ctp-peach" />
			{link.name}
		</a>
	{/each}
</div>
<div class="mt-3 flex items-center justify-center text-center text-sm font-semibold">
	<p>Made with ❤️ by aarsh</p>
</div>
