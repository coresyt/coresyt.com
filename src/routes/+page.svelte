<script lang="ts">
import Header from '@/components/Header.svelte'

import GithubIcon from '@/components/Icons/Github.svelte'
import WebsiteIcon from '@/components/Icons/Website.svelte';

import type { PageData } from './$types'
	import Star from '@/components/Icons/Star.svelte';

export let data: PageData
const { repos } = data
</script>

<svelte:head>
	<title>CoresYT Portafolio</title>
	<meta name="description" content="Mi portafolio" />
	<meta name="keywords" content="Portafolio,CoresYT,Programación,svelte,javascript,react,nodejs">
</svelte:head>

<Header />

<main
	class="min-w-full my-[calc(2*calc(5vw/3))] bg-clay-950/50 border-2 border-clay-950 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-3 p-2.5"
>
	{#each repos as repo}
		<section class="w-full flex flex-col items-center justify-center">
			<h4 class="text-lg font-bold [&>span]:text-clay-400 [&>span]:font-semibold [&>span]:font-mono">
				{repo.name} <span>{repo.language}</span>
			</h4>
			<div class="flex items-center justify-center gap-2">
				<a
					href={repo.html_url}
					target="_blank"
					class="text-xs text-white duration-75 hover:text-sm hover:cursor-pointer hover:text-clay-300"
				>
					<GithubIcon />
					Github
				</a>
				{#if repo?.page}
					<a
						href={repo.page}
						target="_blank"
						class="text-[8px] text-white duration-75 hover:text-[10px] hover:cursor-pointer hover:text-clay-300"
					>
						<WebsiteIcon />
						Home Page
					</a>
				{/if}
			</div>
		</section>
	{/each}
</main>
