<script setup lang="ts">
import {ref} from 'vue';

const dialog = ref<any>(null);
const showDialog = ref<boolean>(false);

function openModal() {
    // (dialog as any).open();
    showDialog.value = !showDialog.value;
    // console.log(showDialog.value);
}
</script>

<template>
    <h3 class="font-semibold">Welcome to Modal page</h3>
    <button class="btn-success" @click="openModal">Show Modal</button>
    <modal ref="dialog" v-model="showDialog"/>
</template>

