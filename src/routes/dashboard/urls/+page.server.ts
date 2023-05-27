import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import prisma from "$lib/prisma";

export const load: PageServerLoad = (async ({ params }) => {
  const urls = prisma.url.findMany({
    orderBy: {
      updateAt: "desc"
    }
  });

  const urls_info = urls?urls:[];

  return { urls: urls_info, domain: process.env.PUBLISH_DOMAIN?process.env.PUBLISH_DOMAIN:"example.com" };
});

export const actions: Actions = {
  register : async ({request}) => {
    const data = await request.formData();

    if(!data.has("name") || !data.has("slug") || !data.has("target")) return fail(400, { message: "全ての項目を入力してください" });

    const name = data.get("name")?.toString();
    const slug = data.get("slug")?.toString();
    const target = data.get("target")?.toString();

    if(!name || !slug || !target) return fail(400, { message: "全ての項目を入力してください" });

    await prisma.url.create({
      data: {
        name: name,
        slug: slug,
        target: target
      }
    });

    return { success: true };
  }
}
