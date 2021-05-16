<script lang="ts">
  import { Link, useLocation } from "svelte-navigator";
  import clsx from "clsx";
  import { _ } from "svelte-i18n";

  const location = useLocation();
  export let to: string;
  export let title: string;
  export let titleKey: string = "";

  const isActive =
    to === "/" ? $location.pathname === to : $location.pathname.startsWith(to);
</script>

<Link
  {to}
  class={clsx("outer-sidebar__link", {
    "outer-sidebar__link--active": isActive
  })}
  title={titleKey ? $_(titleKey, { default: title }) : title}
  ><slot />{#if title}
    <p class="outer-sidebar__link__title">
      {titleKey ? $_(titleKey, { default: title }) : title}
    </p>
  {/if}</Link
>
