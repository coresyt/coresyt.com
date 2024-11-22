import { GetReposGit } from "@/lib/repos";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const repos = await GetReposGit();

  return new Response(JSON.stringify(repos));
};
