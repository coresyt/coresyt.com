import { GetRepoGit } from "@/lib/repos"
import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params }) => {
	if (!params.repo) return new Response(JSON.stringify({}), { status: 400 })
	const repos = await GetRepoGit(params.repo)

	return new Response(JSON.stringify(repos))
}
