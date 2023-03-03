<script setup>

import {ref} from 'vue';
import CustomInput from "~/components/custom-input";

const name = ref('');
const title = ref(null)
</script>


<template>
    <custom-input v-model="name" v-model:title="title"/>

    <hr>
    <p>your name is : {{ name }}</p>
    <p>your title is : {{ title }}</p>
</template>