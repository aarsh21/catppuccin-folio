<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Badge } from '$lib/components/ui/badge';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="prose text-ctp-text prose-headings:mb-1 prose-headings:mt-1 prose-headings:text-ctp-green prose-p:mb-0 prose-a:text-ctp-yellow prose-blockquote:text-ctp-text prose-strong:text-ctp-mauve prose-code:font-jetbrains prose-li:marker:text-ctp-sapphire prose-headings:lg:mb-4 prose-headings:lg:mt-4"
>
	<hgroup class="mb-0 text-xl text-ctp-text">
		<h1>{data.meta.title}</h1>
		<p class="text-sm">
			Published at <span class="font-bold text-ctp-yellow">
				{formatDate(data.meta.date)}
			</span>
		</p>
	</hgroup>

	<div class="tags mt-2">
		{#each data.meta.categories as category}
			<Badge class=" mr-2 bg-ctp-crust text-ctp-mauve outline-ctp-green">
				<span class="surface-4">&num;{category}</span>
			</Badge>
		{/each}
	</div>

	<div class=" prose-lg leading-7 lg:text-xl lg:leading-normal">
		<svelte:component this={data.content} />
	</div>
</article>
