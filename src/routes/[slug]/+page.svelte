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
	class="prose text-ctp-text prose-headings:text-ctp-peach prose-a:text-ctp-peach prose-blockquote:text-ctp-text prose-strong:text-ctp-sky prose-code:text-wrap prose-code:font-jetbrains prose-code:text-ctp-sky prose-li:marker:text-ctp-peach"
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
			<Badge class=" bg-ctp-base text-ctp-sky outline-ctp-peach">
				<span class="surface-4">&num;{category}</span>
			</Badge>
		{/each}
	</div>

	<div class="prose-xl mt-6">
		<svelte:component this={data.content} />
	</div>
</article>
