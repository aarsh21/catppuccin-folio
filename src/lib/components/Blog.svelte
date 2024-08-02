<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let slug, date, description, title;
	import { formatDate } from '$lib/utils';
</script>

<Card.Root class=" m:col-span-2  mt-6">
	<Card.Header class="pb-6">
		<a href={slug}>
			<Card.Title class="w-full text-xl text-cat_tertiary">
				{title}
			</Card.Title>
		</a>
		<div class="flex flex-wrap items-center justify-between">
			<p class="text-sm font-bold text-cat_secondary">{formatDate(date)}</p>
		</div>
		<Card.Description class="mt-0 flex flex-col gap-y-2 text-[1rem] leading-tight">
			{description}
		</Card.Description>
	</Card.Header>
</Card.Root>
