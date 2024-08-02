<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="flex-grow bg-cat_base px-2.5 text-lg text-cat_text antialiased">
	<Navbar />
	<slot></slot>
</main>
