// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    },
  },
});
