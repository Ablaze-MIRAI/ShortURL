import type { PageServerLoad, Actions } from "./$types";
import { error, fail } from "@sveltejs/kit";
import prisma from "$lib/prisma";

export const load: PageServerLoad = (async ({ url }) => {
  const id = url.searchParams.get("id");
  if(!id) throw error(404);

	return { id: id };
});

export const actions: Actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    const id = Number(data.get("id"));

    if(!id) return fail(400, { message: "ERROR" });

    await prisma.url.delete({
      where: {
        id: id
      }
    });

    return { success: true };
  }
}

