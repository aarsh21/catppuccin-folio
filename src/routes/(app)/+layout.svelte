<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="flex-grow bg-cat_base px-2.5 text-lg text-cat_text antialiased">
	<Navbar />
	{@render children?.()}
</main>
