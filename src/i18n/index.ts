import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("./en.json"));
register("zh", () => import("./zh-TW.json"));

init({
  fallbackLocale: "zh-TW",
  initialLocale: getLocaleFromNavigator()
});
