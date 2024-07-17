<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	export let position: string,
		company: string,
		start_date: string,
		end_date: string,
		responsiblities: string[];
</script>

<Card.Root class="mt-6 sm:col-span-2">
	<Card.Header class="pb-6">
		<Card.Title class="w-full">{company}</Card.Title>
		<h1 class="mb-2 text-lg font-semibold">{position}</h1>
		<Card.Description
			class=" lg:text-md mt-0 text-sm leading-tight lg:text-nowrap lg:leading-relaxed"
		>
			{#each responsiblities as response}
				<li>{response}</li>
			{/each}
		</Card.Description>
	</Card.Header>
</Card.Root>
