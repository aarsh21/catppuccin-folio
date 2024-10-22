<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="prose lg:prose-lg text-cat_text prose-headings:mb-1 prose-headings:mt-1 prose-headings:text-cat_primary prose-p:mb-0 prose-a:text-cat_tertiary prose-blockquote:text-cat_text prose-strong:text-cat_quaternary prose-code:mb-2 prose-code:mt-2 prose-code:font-jetbrains prose-li:marker:text-cat_secondary prose-headings:lg:mb-4 prose-headings:lg:mt-4"
>
	<hgroup class="mb-0 text-cat_text">
		<h1>{data.meta.title}</h1>
		<p class="text-sm">
			Published at <span class="font-bold text-cat_tertiary">
				{formatDate(data.meta.date)}
			</span>
		</p>
	</hgroup>

	<div class="tags mt-2">
		{#each data.meta.categories as category}
			<Badge class=" mr-2 text-cat_quaternary outline-cat_primary">
				<span class="surface-4">&num;{category}</span>
			</Badge>
		{/each}
	</div>

	<div class="leading-7 lg:leading-normal">
		<data.content />
	</div>
</article>
