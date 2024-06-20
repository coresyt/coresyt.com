<script>
import GithubIcon from '@/components/Icons/Github.svelte'
</script>

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
