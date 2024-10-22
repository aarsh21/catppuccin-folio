<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HeadingLevel } from './index.js';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	interface Props {
		class?: $$Props['class'];
		tag?: $$Props['tag'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, tag = 'h3', children, ...rest }: Props = $props();
	
</script>

<svelte:element
	this={tag}
	class={cn(
		'underline-offset-3 w-[326px] text-lg  font-semibold leading-none tracking-wider text-cat_primary underline hover:text-cat_quaternary',
		className
	)}
	{...rest}
>
	{@render children?.()}
</svelte:element>
