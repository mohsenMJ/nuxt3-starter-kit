<script setup>
import {simpleCounter} from '~/store/simple-counter'

</script>

<template>
    <h2>Welcome to Stores in vue</h2>
    <h3>information from store -> count : {{ simpleCounter.count }}</h3>
    <button class="btn-primary" @click="simpleCounter.count ++">increment</button>
    <button class="btn-primary" @click="simpleCounter.increment(10)">increment</button>
</template>