import GetReposGit from '$lib/repos';
import type { PageLoad } from './$types'
export const prerender = true

export const load: PageLoad = async () => {
  const repos = await GetReposGit()
  return { repos }
};
