<script>
  import { browser } from "$app/environment";
</script>
<h1 class="text-3xl font-extrabold">ホーム</h1>
<div>
  <div class="mt-10">
    <a href="/dashboard/analytics" class="btn btn-primary">アナリティクス</a>
    <a href="/dashboard/urls" class="btn btn-primary">URL</a>
  </div>
  <div class="mt-10">
    <h2 class="text-2xl">テーマ</h2>
    <select class="mt-1 select select-bordered w-full max-w-xs" value={browser?document.querySelector("html")?.getAttribute("data-theme"):null} data-choose-theme>
      <option value="">OS設定</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="cupcake">Cupcake</option>
      <option value="bumblebee">Bumblebee</option>
      <option value="emerald">Emerald</option>
      <option value="corporate">Corporate</option>
      <option value="synthwave">Synthwave</option>
      <option value="retro">Retro</option>
      <option value="cyberpunk">Cyberpunk</option>
      <option value="valentine">Valentine</option>
      <option value="halloween">Halloween</option>
      <option value="garden">Garden</option>
      <option value="forest">Forest</option>
      <option value="aqua">Aqua</option>
      <option value="lofi">Lofi</option>
      <option value="pastel">Pastel</option>
      <option value="fantasy">Fantasy</option>
      <option value="wireframe">Wireframe</option>
      <option value="black">Black</option>
      <option value="luxury">Luxury</option>
      <option value="dracula">Dracula</option>
      <option value="cmyk">Cmyk</option>
      <option value="autumn">Autumn</option>
      <option value="business">Business</option>
      <option value="acid">Acid</option>
      <option value="lemonade">Lemonade</option>
      <option value="night">Night</option>
      <option value="coffee">Coffee</option>
      <option value="winter">Winter</option>
    </select>
  </div>
</div>
