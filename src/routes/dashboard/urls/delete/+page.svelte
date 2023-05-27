<script lang="ts">
  import type { PageServerData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  export let data: PageServerData;
</script>
<main class="w-full h-screen grid items-center justify-center">
  <div class="w-52">
    <h1 class="text-2xl text-center">削除しますか？</h1>
    <div class="mt-10 flex justify-around">
      <div>
        <a href="/dashboard/urls" class="btn btn-primary">キャンセル</a>
      </div>
      <form action="?/delete" method="post" use:enhance={() =>{
        return async ({ result, update }) =>{
          await update();
          goto("/dashboard/urls/");
        };
      }}>
        <input type="hidden" name="id" value={data.id}>
        <button class="btn btn-error">削除</button>
      </form>
    </div>
  </div>
</main>
