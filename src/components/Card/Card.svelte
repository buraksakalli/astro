<script lang="typescript">
  import { format, parseISO } from "date-fns";

  export let title: string, body: string;
</script>

<div class="bg-slate-200 dark:bg-slate-900 p-6 rounded-lg">
  <time dateTime={"27-08-2022"} class="block text-sm text-slate-700">
    {format(parseISO(new Date().toISOString()), "LLLL d, yyyy")}
  </time>
  <h2 class="text-3xl font-bold">
    <a
      href="http://#"
      class="text-white hover:text-gray-400 duration-300 transition-all"
    >
      {title}
    </a>
  </h2>
  <p class="mt-2 text-slate-600">{body ?? "No content"}</p>
</div>
