const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = {
  sourceMap: true, // "you would always want sourcemaps for the IDE" – dummdidumm
  defaults: {
    script: "typescript",
    style: "scss"
  }
};

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(preprocessOptions)
};
