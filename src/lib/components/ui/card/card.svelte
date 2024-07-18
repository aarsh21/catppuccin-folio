<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'mx-auto  rounded-lg border border-ctp-peach bg-ctp-crust text-ctp-text shadow-sm',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
