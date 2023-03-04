<script setup lang="ts">
import {Api} from "~/composables/useApi"
</script>

<template>
    <nuxt-link to="/" class="text-primary">Home</nuxt-link>
    <p>{{ Api.Page.all.slice(0, 2) }}</p>
    <pre>list will be here soon ...</pre>
</template>