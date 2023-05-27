import type { PageServerLoad, Actions } from "./$types";
import { error, fail } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export const load: PageServerLoad = (async ({ url }) => {
  const id = url.searchParams.get("id");
  if(!id) throw error(404);

  const url_info = prisma.url.findUnique({
    where: {
      id: Number(id)
    }
  });

  if(!url_info) throw error(404);

  return { url: url_info, domain: process.env.PUBLISH_DOMAIN?process.env.PUBLISH_DOMAIN:"example.com" };
});

export const actions: Actions = {
  update: async ({request}) => {
    const data = await request.formData();
    const name = data.get("name")?.toString();
    const slug = data.get("slug")?.toString();
    const target = data.get("target")?.toString();
    const id = data.get("id")?.toString();

    if(!name || !slug || !target || !id) return fail(400, { message: "全ての項目を入力してください" });

    await prisma.url.update({
      where: {
        id: Number(id)
      },
      data: {
        name: name,
        slug: slug,
        target: target
      }
    })

    return { success: true };
  }
}

