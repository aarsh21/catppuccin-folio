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
	class="prose text-ctp-text prose-headings:text-ctp-green prose-a:text-ctp-yellow prose-blockquote:text-ctp-text prose-strong:text-ctp-mauve prose-code:text-wrap prose-code:font-jetbrains prose-li:marker:text-ctp-sapphire"
>
	<hgroup class="mb-0 text-xl text-ctp-text">
		<h1>{data.meta.title}</h1>
		<p class="text-sm">
			Published at <span class="font-bold text-ctp-yellow">
				{formatDate(data.meta.date)}
			</span>
		</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<Badge class=" bg-ctp-base text-ctp-mauve outline-ctp-green">
				<span class="surface-4">&num;{category}</span>
			</Badge>
		{/each}
	</div>

	<div class=" prose-lg mt-6">
		<svelte:component this={data.content} />
	</div>
</article>
