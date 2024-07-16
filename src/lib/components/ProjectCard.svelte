<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="sm:col-span-2">
	<Card.Header class="pb-3">
		<Card.Title>Your Orders</Card.Title>
		<Card.Description class="max-w-lg text-balance leading-relaxed">
			Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.
		</Card.Description>
	</Card.Header>
	<Card.Footer>
		<Button>Create New Order</Button>
	</Card.Footer>
</Card.Root>
