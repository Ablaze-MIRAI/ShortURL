<script>
  import { page } from "$app/stores";
</script>
<div class="w-full h-screen grid items-center justify-center">
  <div>
    <h1 class="text-5xl text-center mb-5">
      {$page.status}
    </h1>
    <p class="text-xl">
      {$page.error?.message}
    </p>
  </div>
</div>
