<script lang="ts" setup>
  const { id } = useRoute().params
</script>

<template>
  <div class="container mx-auto p-10">
    <h2 class="font-bold"> Page: {{ id }} </h2>


    <img class="max-w-70 rounded-lg" src="https://media.istockphoto.com/id/903934818/tr/foto%C4%9Fraf/istanbul-say%C4%B1s%C4%B1.jpg?s=612x612&w=0&k=20&c=y8mpuX3uQZDGk2PVFqHgbokiNayLfvpgWBKzrJ5E_U4=" alt="test" />
    <p>you can see this text right away</p>
    <NuxtLink class="btn-success" to="/">Go Back</NuxtLink>
    <NuxtLink class="btn-primary" to="/">Home</NuxtLink>
  </div>
</template>

<style scoped></style>
