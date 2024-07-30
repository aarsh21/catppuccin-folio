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
	class="prose text-ctp-text prose-headings:text-ctp-green prose-a:text-ctp-green prose-blockquote:text-ctp-text prose-strong:text-ctp-mauve prose-code:text-wrap prose-code:font-jetbrains prose-code:text-ctp-mauve prose-li:marker:text-ctp-green"
>
	<hgroup class="prose-xl text-ctp-text">
		<h1>{data.meta.title}</h1>
		<p>
			Published at <span class="font-semibold">
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

	<div class="prose-xl mt-6">
		<svelte:component this={data.content} />
	</div>
</article>
