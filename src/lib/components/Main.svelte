<script lang="ts">
	import WorkCard from '$lib/components/WorkCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { Projects, Work } from '$lib/profileDetails';
</script>

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
