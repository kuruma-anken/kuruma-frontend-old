<script lang="ts" type="module">
  import Routes from "./Router.svelte";
  import client from "./graphql/client";
  import { setClient } from "svelte-apollo";

  setClient(client);
</script>

<Routes />
