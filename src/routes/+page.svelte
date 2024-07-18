<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Icon from '@iconify/svelte';
	import { Projects, Work } from '$lib/profileDetails';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="mt-4 flex items-center justify-self-auto text-3xl font-semibold">
	<Avatar />
	<h1 class="ml-4">Aarsh padia</h1>
</div>
<div class="ml-[6px] mt-4 flex items-center text-lg">
	<Icon icon="mingcute:location-2-line" class="h-6 w-6 text-ctp-peach" />
	<h1 class="ml-2">Rajkot , Gujarat</h1>
</div>
<div class="ml-[6px] mt-2 flex items-center text-lg">
	<Icon icon="uil:suitcase-alt" class=" h-6 w-6 text-ctp-peach" />
	<h1 class="ml-2">OSS contributor and Web Developer</h1>
</div>
<p class="mb-2 mt-4">
	I'm a 20 y/o cs undergrad student. I love building things , playing games and ricing my Arch
	Linux. I enjoy web development and i live on the terminal. If I'm not coding, I'm probably losing
	my mind in valorant or watching anime.
</p>
<div>
	<h1 class="mb-4 text-3xl font-semibold">Work</h1>
	{#each Work as work}
		<WorkCard
			position={work.position}
			company={work.company}
			end_date={work.end_date}
			start_date={work.start_date}
			responsiblities={work.responsibilities}
		/>
	{/each}
</div>
<div>
	<h1 class="mb-4 mt-6 text-3xl font-semibold">Projects</h1>
	{#each Projects as project}
		<a href={project.link}>
			<ProjectCard project={project.project} details={project.details} />
		</a>
	{/each}
</div>

<Footer />
