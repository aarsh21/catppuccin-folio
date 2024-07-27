<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let slug, date, description, title;
	import { formatDate } from '$lib/utils';
</script>

<a href={slug}>
	<Card.Root class=" mt-6 hover:border-ctp-sky sm:col-span-2">
		<Card.Header class="pb-6">
			<Card.Title class="w-full text-xl">
				{title}
			</Card.Title>
			<div class="flex flex-wrap items-center justify-between">
				<p class="text-sm font-medium">{formatDate(date)}</p>
			</div>
			<Card.Description class="mt-0 flex flex-col gap-y-2 text-[1rem] leading-tight">
				{description}
			</Card.Description>
		</Card.Header>
	</Card.Root>
</a>
