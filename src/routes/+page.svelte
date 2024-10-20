<script lang="ts">
	import Header from '@/components/Header.svelte';
	import type { PageData } from './$types';
	import ListRepos from '@/components/ListRepos.svelte';

	export let data: PageData;
	const { repos } = data;
</script>

<svelte:head>
	<title>CoresYT Portafolio</title>
	<meta name="description" content="Mi portafolio" />
	<meta name="keywords" content="Portafolio,CoresYT,Programación,svelte,javascript,react,nodejs" />
</svelte:head>

<Header />

<ListRepos {repos} />

<footer>
	<h2>
		Todos los derechos reservados a <a
			href="https://github.com/coresyt"
			target="_blank"
			rel="noopener noreferrer">coresyt</a
		>
	</h2>
</footer>
