<script lang="ts">
  import type { PageServerData } from "./$types";
  import { enhance } from "$app/forms";

  export let data: PageServerData;

  let loading: boolean = false;
  let modal_addurl: boolean = false;
</script>
<h1 class="text-3xl font-extrabold">URL</h1>
<div>
  <div class="mt-10">
    <label for="create-url" class="btn btn-primary btn-wide no-animation">URLの作成</label>
    <input type="checkbox" id="create-url" class="modal-toggle" bind:checked={modal_addurl} />
    <div class="modal">
      <div class="modal-box relative">
        <label for="create-url" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">URLの作成</h3>
        <div class="py-4">
          <form action="?/register" method="post" class="flex flex-col" use:enhance={() =>{
            loading = true;

            return async ({ result, update }) => {
              await update();
              loading = false;
              modal_addurl = false;
            };
          }}>
            <div class="form-control w-full mt-5">
              <label for="url_name" class="label">名前</label>
              <input id="url_name" type="text" name="name" placeholder="e.g. YouTube Channel" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full mt-5">
              <label for="url_slug" class="label">URL</label>
              <div class="input-group">
                <span>{data.domain}/</span>
                <input id="url_slug" type="text" name="slug" placeholder="youtube" class="input input-bordered w-full" />
              </div>
            </div>
            <div class="form-control w-full mt-5">
              <label for="url_target" class="label">リダイレクト先</label>
              <textarea id="url_target" name="target" class="textarea textarea-bordered h-24 w-full" placeholder="e.g. https://www.youtube.com/channel/xxxxxxxx"></textarea>
            </div>
            <button class="btn btn-primary mt-5" disabled={loading}>
              {#if loading}
              作成中...
              {:else}
              作成
              {/if}
            </button>
            {#if loading}
            <p>Loading...</p>
            {/if}
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-10 mb-20 grid md:grid-cols-2">
    {#each data.urls as url}
    <div class="p-2 mb-5">
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{url.name}</h2>
          <p>{data.domain}/{url.slug}</p>
          <p>最終更新: {url.updateAt.toLocaleString()}</p>
          <div class="card-actions justify-end">
            <a href="/dashboard/urls/delete/?id={url.id}" class="btn btn-error btn-sm no-animation">削除</a>
            <a href="/dashboard/urls/edit/?id={url.id}" class="btn btn-primary btn-sm no-animation">編集</a>
          </div>
        </div>
      </div>
    </div>
    {/each}
  </div>
</div>
