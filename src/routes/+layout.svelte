<script lang="ts">
	import '../app.css';
	import { profilePicture, Name } from '$lib/profileDetails';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>{Name}</title>
	<link rel="icon" href={profilePicture} />
</svelte:head>

<div class="relative min-h-screen text-ctp-text">
	<slot></slot>

	<Footer />
</div>
