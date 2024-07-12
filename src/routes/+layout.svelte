<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<main
	class=" relative mx-auto mt-8 h-full w-full min-w-[320px] max-w-[1000px] text-balance bg-ctp-crust px-2.5 text-ctp-text antialiased sm:w-[90%]"
>
	<Navbar />
	<slot></slot>
</main>
