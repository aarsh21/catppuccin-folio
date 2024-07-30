<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let position: string,
		company: string,
		start_date: string,
		end_date: string,
		responsiblities: string[],
		link: string;
</script>

<a href={link}>
	<Card.Root class=" mt-6 sm:col-span-2">
		<Card.Header class="pb-6">
			<Card.Title class="w-full text-xl">{company}</Card.Title>
			<div class="flex flex-wrap items-center justify-between">
				<h1 class="mb-2 text-lg font-semibold">{position}</h1>
				<p class="text-sm font-semibold">{`${start_date} - ${end_date}`}</p>
			</div>
			<Card.Description class="mt-0 flex flex-col gap-y-2">
				{#each responsiblities as response}
					<li class="text-[1rem] leading-tight">{response}</li>
				{/each}
			</Card.Description>
		</Card.Header>
	</Card.Root>
</a>
