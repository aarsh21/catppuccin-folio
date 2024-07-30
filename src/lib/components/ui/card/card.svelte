<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={cn(
		'mx-auto  rounded-lg border border-ctp-green bg-ctp-base text-ctp-text shadow-sm transition-all  duration-100 ease-in-out hover:border-ctp-mauve',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
