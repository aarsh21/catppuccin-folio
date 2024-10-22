<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: $$Props['class'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<div
	class={cn(
		'mx-auto  rounded-lg border border-cat_primary bg-cat_base text-cat_text shadow-sm transition-all  duration-100 ease-in-out hover:border-cat_quaternary',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
