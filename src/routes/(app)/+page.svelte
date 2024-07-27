<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Main from '$lib/components/Main.svelte';

	export let data;
</script>

<Hero />
<Main />

<div class="mx-4 mt-6">
	<h1 class="text-3xl font-bold">Blogs</h1>
	{#each data.posts as post}
		<a href={post.slug}>
			<h1 class="mb-0 mt-4 font-semibold text-ctp-peach">{post.title}</h1>
			<p class="text-[1rem]">{post.description}</p>
		</a>
	{/each}
</div>
