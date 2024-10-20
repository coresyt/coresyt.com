import type { GithubAPi, GithubAPiRes } from '../types';
import { GITHUB_TOKEN } from '$env/static/private';

export default async function GetReposGit(): Promise<Array<GithubAPiRes>> {
	const res = await fetch('https://api.github.com/users/coresyt/repos', {
		headers: {
			Authorization: GITHUB_TOKEN
		}
	});
	const json: Promise<Array<GithubAPi>> = await res.json();
	return (await json)
		.map((obj: GithubAPi) => {
			const { name, html_url, language, homepage, stargazers_count, description } = obj;
			if (homepage)
				return {
					name,
					html_url,
					language,
					page: homepage,
					stars: stargazers_count,
					desc: description
				};
			return { name, html_url, language, stars: stargazers_count, desc: description };
		})
		.filter((obj) => obj.name !== 'coresyt');
}
