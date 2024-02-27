<template>
  <p>{{ data }}</p>
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