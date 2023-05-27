<script lang="ts">
  import type { PageServerData } from "./$types";
  import { enhance } from "$app/forms";

  export let data: PageServerData;

  let url_info = data.url;
  let name = url_info?.name;
  let slug = url_info?.slug;
  let target = url_info?.target;
  let loading = false;
  let updated = false;
  let error: string | null = null;
</script>
<div class="w-full mb-10">
  <h1 class="text-3xl font-extrabold">URLの編集</h1>
  <div class="mt-10">
    <div class="w-full md:max-w-md">
      {#if updated}
      <div class="alert alert-success shadow-lg w-full">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>更新しました</span>
        </div>
      </div>
      {/if}
      {#if error}
      <div class="alert alert-error shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{error}</span>
        </div>
      </div>
      {/if}
    </div>
    <div>
      <p>作成日時: {url_info?.createAt.toLocaleString()}</p>
      <p>最終更新: {url_info?.updateAt.toLocaleString()}</p>
    </div>
    <form action="?/update" method="post" class="w-full" autocomplete="off" use:enhance={() =>{
      loading = true;
      updated = false;

      return async ({ result, update }) => {
        await update();
        loading = false;
        if(result.status != 200){
          // @ts-ignore
          error = result.data.message;
        }else{
          updated = true;
          name = data.url?.name;
        }
      };
    }}>
      <div class="form-control w-full mt-5">
        <label for="url_name" class="label">名前</label>
        <input id="url_name" type="text" name="name" placeholder="e.g. YouTube Channel" value={name} class="input input-bordered w-full md:max-w-md" />
      </div>
      <div class="form-control w-full mt-5 md:max-w-md">
        <label for="url_slug" class="label">URL</label>
        <div class="input-group">
          <span>data.domain/</span>
          <input id="url_slug" type="text" name="slug" placeholder="youtube" value={slug} class="input input-bordered w-full" />
        </div>
      </div>
      <div class="form-control w-full mt-5">
        <label for="url_target" class="label">リダイレクト先</label>
        <textarea id="url_target" name="target" class="textarea textarea-bordered h-24 w-full md:max-w-md" placeholder="e.g. https://www.youtube.com/channel/xxxxxxxx">{target}</textarea>
      </div>
      <div class="form-control w-full md:max-w-md mt-5 flex flex-row">
        <a href="/dashboard/urls" class="btn btn-secondary no-animation">戻る</a>
        <input type="hidden" name="id" value={url_info?.id}>
        <button class="ml-2 btn btn-primary" disabled={loading}>
          {#if loading}
          更新中...
          {:else}
          更新
          {/if}
        </button>
      </div>
    </form>
  </div>
</div>
