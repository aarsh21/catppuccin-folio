<script lang="ts">
	import { SquareArrowOutUpRightIcon } from 'lucide-svelte';

	import WorkCard from '$lib/components/WorkCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { Projects, Work, Links } from '$lib/profileDetails';
</script>

<div class="mt-0 lg:mt-4">
	<h1 class=" mb-4 text-3xl font-semibold text-cat_tertiary">Work</h1>
	{#each Work as work}
		<WorkCard
			link={work.link}
			position={work.position}
			company={work.company}
			end_date={work.end_date}
			start_date={work.start_date}
			responsiblities={work.responsibilities}
		/>
	{/each}
</div>
{#each Projects as project}
	<ProjectCard project={project.project} link={project.link} details={project.details} />
{/each}

<a
	target="_blank"
	href={Links.find((link) => link.name === 'GitHub')?.url}
	class="text-md group mt-6 flex items-center justify-end font-semibold"
>
	<span
		class="mr-2 text-sm font-semibold text-cat_primary transition-all duration-100 ease-in-out group-hover:text-cat_quaternary"
		>more projects</span
	>
	<SquareArrowOutUpRightIcon
		class="h-4 w-4 text-cat_primary transition-all duration-100  ease-in-out group-hover:text-cat_quaternary "
		strokeWidth="3px"
	/>
</a>
