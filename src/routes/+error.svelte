<script>
	import { page } from '$app/stores';
</script>

<div class="grid h-full content-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
