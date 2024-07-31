<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="flex-grow bg-ctp-base px-2.5 text-lg text-ctp-text antialiased">
	<Navbar />
	<slot></slot>
</main>
