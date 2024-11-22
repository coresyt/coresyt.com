import type { GithubAPi, GithubAPiRes } from "../types";

const API_URL = "https://api.github.com";

export async function GetReposGit(): Promise<Array<GithubAPiRes>> {
  const res = await fetch(`${API_URL}/users/coresyt/repos`, {
    headers: {
      Authorization: import.meta.env.GITHUB_TOKEN,
    },
  });
  const json: Promise<Array<GithubAPi>> = await res.json();
  return (await json)
    .map((obj: GithubAPi) => {
      const {
        name,
        html_url,
        language,
        homepage,
        stargazers_count,
        description,
      } = obj;
      if (homepage)
        return {
          name,
          html_url,
          language,
          page: homepage,
          stars: stargazers_count,
          desc: description,
        };
      return {
        name,
        html_url,
        language,
        stars: stargazers_count,
        desc: description,
      };
    })
    .filter((obj) => obj.name !== "coresyt");
}

export async function GetRepoGit(name: string): Promise<GithubAPiRes> {
  const res = await fetch(`${API_URL}/repos/coresyt/add-items-react`);
  const json: Promise<GithubAPi> = await res.json();
  const { html_url, language, homepage, stargazers_count, description } =
    await json;
  if (homepage)
    return {
      name,
      html_url,
      language,
      page: homepage,
      stars: stargazers_count,
      desc: description,
    };
  return {
    name,
    html_url,
    language,
    stars: stargazers_count,
    desc: description,
  };
}
