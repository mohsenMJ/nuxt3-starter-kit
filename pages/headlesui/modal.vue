<template>
    <div class="py-6 px-3">
        <button class="btn-success" @click="open = !open">toggle modal</button>
        <modal v-model="open"/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'panel'
})
import {ref, onMounted} from 'vue'

const open = ref(true)
</script>