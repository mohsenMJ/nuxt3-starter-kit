<script lang="ts" setup></script>

<template>
  <div class="bg-gray-50 tw-w-full h-screen">

    <div class="container mx-auto bg-white">
      <div class="columns-4 space-y-2 gap-2">
          <div v-for="i in 50" :key="`A${i}`" class="bg-red-50">{{ 'A' + i}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
