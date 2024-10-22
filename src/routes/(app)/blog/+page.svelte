<script lang="ts">
	import Blog from '$lib/components/Blog.svelte';
	let { data } = $props();
</script>

{#each data.posts as post}
	<Blog slug={post.slug} title={post.title} description={post.description} date={post.date} />
{/each}
