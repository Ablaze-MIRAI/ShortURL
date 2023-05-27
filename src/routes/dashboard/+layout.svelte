<script>
  import { House, BarChart, Link45deg, Tag } from "svelte-bootstrap-icons";
</script>
<div class="h-full w-full md:flex">
  <header>
    <ul class="max-md:hidden menu bg-base-100 w-56" >
      <li><a href="/dashboard/"><House />ホーム</a></li>
      <li><a href="/dashboard/analytics"><BarChart />アナリティクス</a></li>
      <li><a href="/dashboard/urls"><Link45deg />URL</a></li>
      <li><a href="/dashboard/sources"><Tag />ソースパラメーター</a></li>
    </ul>
  </header>
  <main class="w-full h-full pt-2 px-5">
    <slot/>
  </main>
  <nav class="md:hidden">
    <div class="btm-nav">
      <a href="/dashboard/"><House /></a>
      <a href="/dashboard/analytics"><BarChart /></a>
      <a href="/dashboard/urls"><Link45deg /></a>
      <a href="/dashboard/sources"><Tag /></a>
    </div>
  </nav>
</div>
