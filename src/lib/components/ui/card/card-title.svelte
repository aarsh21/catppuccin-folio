<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h3';
	export { className as class };
</script>

<svelte:element
	this={tag}
	class={cn(
		'underline-offset-3 w-[326px] text-lg  font-semibold leading-none tracking-wider text-cat_primary underline hover:text-cat_quaternary',
		className
	)}
	{...$$restProps}
>
	<slot />
</svelte:element>
