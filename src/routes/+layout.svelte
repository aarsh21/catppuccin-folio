<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main class="bg-ctp-crust px-2.5 text-lg text-ctp-text antialiased">
	<Navbar />
	<slot></slot>
</main>
