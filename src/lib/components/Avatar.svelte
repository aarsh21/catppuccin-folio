<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import image from '$lib/images/rengoku.png';
</script>

<Avatar.Root>
	<Avatar.Image src={image} alt="@aarsh21" />
	<Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
