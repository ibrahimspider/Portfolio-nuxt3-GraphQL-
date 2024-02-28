<template>
  <div>
    <SiteHeader />
    <NuxtPage />
  </div>
</template>
<script  setup>
const query = gql`
query getCharacters{
  characters{
    results {
      name
      image
      status
      id
      species
      location {
        name
      }
    }
  }
}

`
const { data } = await useAsyncQuery(query)
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>