<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	export let project: string, details: string[];
</script>

<Card.Root class="col-span-1 mt-6 sm:col-span-2">
	<Card.Header class="pb-6">
		<Card.Title class="text-lg text-ctp-yellow">{project}</Card.Title>
		<Card.Description class=" mt-0 flex flex-col gap-y-2 ">
			{#each details as detail}
				<li class="lg:text-md text-[1rem] leading-5 marker:text-ctp-mauve lg:leading-tight">
					{detail}
				</li>
			{/each}
		</Card.Description>
	</Card.Header>
</Card.Root>
