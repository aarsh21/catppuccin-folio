<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { Name, profilePicture } from '$lib/profileDetails';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import '../app.css';

	setupViewTransition();
</script>

<svelte:head>
	<title>{Name}</title>
	<link rel="icon" href={profilePicture} />
</svelte:head>

<div class="relative w-full p-0 min-h-screen text-cat_text">
	<slot></slot>
	<Footer />
</div>
