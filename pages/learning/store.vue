<script setup>
    import { store } from '~/store/store'
</script>

<template>
    <h2>Welcome to Stores in vue</h2>
    <h3>information from store -> count : {{ store.count}}</h3>
    <button class="btn-primary" @click="store.count ++">increment</button>
    <button class="btn-primary" @click="store.increment(10)">increment</button>


</template>