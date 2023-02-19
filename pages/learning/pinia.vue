<script setup>

import {useCounterStore} from "~/store/useCounter";

const counterStore = useCounterStore()

</script>

<template>
    <h2>Welcome to Pinia in vue</h2>
    <h3>information from store -> count : {{ counterStore.count }}</h3>
    <button class="btn-primary" @click="counterStore.count ++">increment</button>
    <button class="btn-primary" @click="counterStore.increment">increment</button>
</template>