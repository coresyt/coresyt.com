<script lang="ts">
import GithubIcon from '../components/GithubIcon.svelte'
import WebsiteIcon from '../components/WebsiteIcon.svelte';
import type { PageData } from './$types'

export let data: PageData
const { repos } = data
</script>

<svelte:head>
	<title>CoresYT Portafolio</title>
	<meta name="description" content="Mi portafolio" />
	<meta name="keywords" content="Portafolio,CoresYT,Programación,svelte,javascript,react,nodejs">
</svelte:head>

<header
	class="min-w-full h-72 my-[calc(2*calc(5vw/3))] bg-clay-950/50 border-2 border-clay-950 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-3 p-5"
>
	<div class="flex items-center justify-center gap-5">
		<img class="max-w-16 rounded-full" src="/logo.webp" alt="Logo de Coresyt" />
		<h1 class="text-2xl font-bold w-[50%] [&>span]:text-clay-400 [&>span]:font-semibold [&>span]:font-mono">
			Pedro <span>Damian</span> <span>Díaz</span> Sanchez
		</h1>
	</div>
	<p class="text-center [&>span]:text-clay-400 [&>span]:font-bold [&>span]:font-mono w-60">
		Tengo <span>1 año y medio</span> programando y tengo
		<span>{new Date().getFullYear() - 2011} años</span>
		programador <span>Front-End</span>
	</p>
	<ul>
		<li>
			<a
				href="https://github.com/coresyt"
				target="_blank"
				class="text-md text-white duration-200 hover:text-lg hover:cursor-pointer hover:text-clay-300"
			>
				<GithubIcon />
				Github
			</a>
		</li>
	</ul>
</header>

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
					class="text-xs text-white duration-200 hover:text-sm hover:cursor-pointer hover:text-clay-300"
				>
					<GithubIcon />
					Github
				</a>
				{#if repo.page}
					<a
						href={repo.page}
						target="_blank"
						class="text-[8px] text-white duration-200 hover:text-[10px] hover:cursor-pointer hover:text-clay-300"
					>
						<WebsiteIcon />
						Home Page
					</a>
				{/if}
			</div>
		</section>
	{/each}
</main>
