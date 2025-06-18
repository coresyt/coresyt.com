import type { GithubAPi, GithubAPiRes } from "../types"

const API_URL = "https://api.github.com"
const MOCK_JSON = "http://localhost:4321/mock.json"

export async function GetReposGit(): Promise<Array<GithubAPiRes>> {
	let res
	if (Boolean(import.meta.env.IS_LOCAL) === true) {
		res = await fetch(MOCK_JSON)
	} else {
		res = await fetch(`${API_URL}/users/coresyt/repos`, {
			headers: {
				Authorization: import.meta.env.GITHUB_TOKEN,
			},
		})
	}
	const json: Promise<Array<GithubAPi>> = await res.json()
	return (await json)
		.map((obj: GithubAPi) => {
			const { name, html_url, language, homepage, stargazers_count, description } = obj
			if (homepage)
				return {
					name,
					html_url,
					language,
					page: homepage,
					stars: stargazers_count,
					desc: description,
				}
			return {
				name,
				html_url,
				language,
				stars: stargazers_count,
				desc: description,
			}
		})
		.filter((obj) => obj.name !== "coresyt.com")
}

export async function GetRepoGit(name: string): Promise<GithubAPiRes> {
	let data
	if (Boolean(import.meta.env.IS_LOCAL) === true) {
		const res = await fetch(MOCK_JSON)
		const json: Promise<GithubAPi[]> = await res.json()
		const jsonByRepoId = (await json).findIndex((val) => val.name !== name)
		data = (await json)[jsonByRepoId]
	} else {
		const res = await fetch(`${API_URL}/repos/coresyt/add-items-react`)
		const json: Promise<GithubAPi> = await res.json()
		const { html_url, language, homepage, stargazers_count, description } = await json
		data = { html_url, language, homepage, stargazers_count, description }
	}

	const { html_url, language, homepage, stargazers_count, description } = data

	if (homepage)
		return {
			name,
			html_url,
			language,
			page: homepage,
			stars: stargazers_count,
			desc: description,
		}
	return {
		name,
		html_url,
		language,
		stars: stargazers_count,
		desc: description,
	}
}
