<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { Name } from '$lib/profileDetails';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head><title>{Name}</title></svelte:head>

<div class="relative min-h-screen text-ctp-text">
	<main class="flex-grow bg-ctp-base px-2.5 text-lg text-ctp-text antialiased">
		<Navbar />
		<slot></slot>
	</main>

	<Footer />
</div>
