<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Main from '$lib/components/Main.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<Hero />
<Main />

{#each data.posts as post}
	<Blog slug={post.slug} title={post.title} description={post.description} date={post.date} />
{/each}
<Footer />
