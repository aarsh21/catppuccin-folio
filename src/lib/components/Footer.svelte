<script lang="ts">
	import { Links, Name } from '$lib/profileDetails';
</script>

<footer class="absolute bottom-[-150px] left-0 right-0 text-center">
	<hr class="mb-2 border-t border-ctp-surface0" />
	<div class="mb-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-4 py-5">
		{#each Links as link}
			<a class="group flex items-center justify-center gap-x-6 text-sm font-bold" href={link.url}>
				<svelte:component
					this={link.icon}
					class="h-6 w-6 text-ctp-green transition-all duration-100 ease-in-out group-hover:text-ctp-mauve"
				/>
			</a>
		{/each}
	</div>
	<div class="flex items-center justify-center pb-3 text-center text-sm font-semibold">
		<p class="text-ctp-lavender">{`Made with   ❤️  \t by ${Name.split(' ')[0]}`}</p>
	</div>
</footer>
