<script lang="ts">
	import GithubIcon from '@/components/Icons/Github.svelte';
	import WebsiteIcon from '@/components/Icons/Website.svelte';
	import Star from '@/components/Icons/Star.svelte';
	import type { GithubAPiRes } from '@/types';

	export let repos: GithubAPiRes[];

	const isOdd = (num: number): true | false => {
		const op = num % 2;
		return op === 0 ? true : op === 1 ? false : false;
	};

	const addClassToRepoIsOdd = (i: number, length: number) => {
		if (isOdd(repos.length)) return '';
		else if (i > length || i < length) return '';
		return 'grid-column-start: 1;grid-column-end: 3;';
	};
</script>

<main
	class="min-w-full sm:w-[500px] my-[calc(2*calc(5vw/3))] bg-clay-950/50 border-2 border-clay-950 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-3 p-2.5 sm:grid sm:grid-cols-2"
>
	{#if repos.length <= 0}
		<h2>No hay repositorios</h2>
	{:else}
		{#each repos as repo, i}
			<section
				class="w-full flex flex-col items-center justify-center sm:gap-2"
				style={addClassToRepoIsOdd(i + 1, repos.length)}
			>
				<h4
					class="text-lg font-bold [&>span]:text-clay-400 [&>span]:font-semibold [&>span]:font-mono sm:text-center"
				>
					{repo.name} <span>{repo.language}</span>
				</h4>
				<div class="w-full flex items-center justify-center sm:justify-around gap-2">
					<a
						href={repo.html_url}
						target="_blank"
						class="text-xs text-white duration-75 hover:text-sm hover:cursor-pointer hover:text-clay-300"
					>
						<span class="fill-clay-500">
							<GithubIcon />
						</span>
						Github
					</a>
					{#if repo.page}
						<a
							href={repo.page}
							target="_blank"
							class="text-[8px] text-white duration-75 hover:text-[10px] hover:cursor-pointer hover:text-clay-300"
						>
							<span class="fill-clay-400">
								<WebsiteIcon />
							</span>
							Home Page
						</a>
					{/if}
				</div>
			</section>
		{/each}
	{/if}
</main>
