<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import profilePictue from '$lib/images/profile.webp';
</script>

<Avatar.Root>
	<Avatar.Image src={profilePictue} alt="@aarsh21" />
	<Avatar.Fallback>CN</Avatar.Fallback>
</Avatar.Root>
