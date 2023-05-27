import type { PageServerLoad } from "./$types";
import { redirect, error } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export const load = (async ({ params, request }) => {
  if(!params.slug) throw error(404, { message: "URLは見つかりませんでした" })

  const url_info = await prisma.url.findUnique({
    where: {
      slug: params.slug
    }
  });

  if(!url_info) throw error(404, { message: "URLは見つかりませんでした" });

  throw redirect(302, url_info.target);
}) satisfies PageServerLoad;
