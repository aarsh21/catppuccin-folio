<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<script lang="ts" module>
	import { img } from '$lib/components/markdown/index';
	export { img };
</script>

{@render children?.()}
