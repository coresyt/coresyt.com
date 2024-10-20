import GetReposGit from '$lib/repos';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const repos = await GetReposGit();
	return { repos };
};
