<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<main class=" relative mx-auto mt-8 h-full w-[50%] bg-ctp-crust px-2.5 text-ctp-text antialiased">
	<Navbar />
	<slot></slot>
</main>
