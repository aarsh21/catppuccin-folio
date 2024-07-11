<script lang="ts">
	import { page } from '$app/stores';
	const styles =
		'text-ctp-peach underline decoration-wavy decoration-[1.5px] underline-offset-[6px]';
</script>

<aside class="tracking-light mb-8">
	<nav class="flex scroll-pr-6 flex-row items-start gap-x-4 px-0 py-0 text-2xl font-bold">
		<a href="/" class={$page.route.id === '/' ? `${styles}` : ''}>home</a>
		<a href="/blog" class={$page.route.id === '/blog' ? `${styles}` : ''}>blog</a>
		<a href="/guestbook" class={$page.route.id === '/guestbook' ? `${styles}` : ''}>guestbook</a>
	</nav>
</aside>
