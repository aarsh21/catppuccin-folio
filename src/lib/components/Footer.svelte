<script lang="ts">
	import { Links, Name } from '$lib/profileDetails';
	import Icon from '@iconify/svelte';
</script>

<footer class="absolute bottom-[-150px] left-0 right-0 text-center">
	<div class="mb-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 py-5">
		{#each Links as link}
			<a class="group flex items-center justify-center gap-x-2 text-sm font-bold" href={link.url}>
				<Icon
					icon="mingcute:link-fill"
					class="h-4 w-4 text-ctp-green transition-all duration-100 ease-in-out group-hover:text-ctp-mauve"
				/>
				<span class="transition-all duration-100 ease-in-out group-hover:text-ctp-mauve">
					{link.name}
				</span>
			</a>
		{/each}
	</div>
	<div class="flex items-center justify-center pb-3 text-center text-sm font-semibold">
		<p>{`Made with   ❤️  \t by ${Name.split(' ')[0]}`}</p>
	</div>
</footer>
