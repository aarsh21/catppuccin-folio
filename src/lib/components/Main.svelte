<script lang="ts">
	import WorkCard from '$lib/components/WorkCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { Projects, Work, Links } from '$lib/profileDetails';
	import Icon from '@iconify/svelte';
</script>

<div class="mt-6">
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
{#each Projects as project}
	<a target="_blank" href={project.link}>
		<ProjectCard project={project.project} details={project.details} />
	</a>
{/each}

<a
	href={Links.find((link) => link.name === 'GitHub')?.url}
	class="mt-6 flex items-center justify-end text-sm font-bold"
>
	<span class="mr-2"> More projects </span>
	<Icon class="h-4 w-4 text-ctp-peach" icon="humbleicons:external-link" />
</a>
