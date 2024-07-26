<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Name } from '$lib/profileDetails';
</script>

<head><title>{Name}</title></head>

<main class="bg-ctp-crust px-2.5 text-lg text-ctp-text antialiased">
	<Navbar />
	<slot></slot>
</main>
