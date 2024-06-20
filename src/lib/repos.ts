import type { GithubAPi, GithubAPiRes } from '../types';

export default async function GetReposGit(): Promise<Array<GithubAPiRes>> {
	const res = await fetch('https://api.github.com/users/coresyt/repos', {
		headers: {
			Authorization: import.meta.env.PUBLIC_GITHUB_TOKEN
		}
	});
	const json: Promise<Array<GithubAPi>> = await res.json();
	return (await json).map((obj: GithubAPi) => {
		const { name, html_url, language, homepage, stargazers_count } = obj;
		if(homepage) return { name, html_url, language, page: homepage, stars: stargazers_count };
		return { name, html_url, language, stars: stargazers_count };
	}).filter(obj => obj.name !== 'coresyt');
}
