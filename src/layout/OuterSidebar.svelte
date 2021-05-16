<script lang="ts">
  import OuterSidebarLink from "./OuterSidebarLink.svelte";
  import { useSignOutMutation } from "../graphql/queries/userQueries";
  const signOut = useSignOutMutation();
  import {
    Car,
    UserCog,
    UserTie,
    DoorClosed,
    Dashboard
  } from "../icons/lib/index";
  import { Link } from "svelte-navigator";
  import { _ } from "svelte-i18n";
</script>

<nav class="outer-sidebar">
  <div class="outer-sidebar__branding">
    <Link to="/">車</Link>
  </div>
  <div class="outer-sidebar__menu">
    <OuterSidebarLink to="/" title="Vehicles" titleKey="pages.vehicles"
      ><Car /></OuterSidebarLink
    >
    <OuterSidebarLink to="/dashboard" title="Dashboard"
      ><Dashboard /></OuterSidebarLink
    >
    <OuterSidebarLink to="/clients" title="Clients" titleKey="pages.clients"
      ><UserTie /></OuterSidebarLink
    >
    <OuterSidebarLink to="/employees" title="Employees"
      ><UserCog /></OuterSidebarLink
    >
  </div>
  <button
    class="outer-sidebar__link"
    type="button"
    on:click={signOut}
    title="Sign out"><DoorClosed /></button
  >
</nav>
