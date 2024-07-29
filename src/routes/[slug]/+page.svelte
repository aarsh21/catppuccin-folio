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
	class="prose text-ctp-text prose-headings:text-ctp-peach prose-strong:text-ctp-sky prose-code:text-ctp-blue"
>
	<hgroup class="prose-sm">
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<Badge variant="outline" class="text-ctp-peach">
				<span class="surface-4">&num;{category}</span>
			</Badge>
		{/each}
	</div>

	<div class="prose-xl">
		<svelte:component this={data.content} />
	</div>
</article>
