<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Main from '$lib/components/Main.svelte';

	export let data;
</script>

<Hero />
<Main />

<div class="mx-4">
	<h1 class="text-3xl font-bold text-ctp-yellow">Blogs</h1>
	{#each data.posts as post}
		<a href={post.slug}>
			<h1 class="mb-0 mt-4 font-semibold text-ctp-green">{post.title}</h1>
			<p class="text-[1rem]">{post.description}</p>
		</a>
	{/each}
</div>
