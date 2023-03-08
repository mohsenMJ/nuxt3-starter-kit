<script setup lang="ts">
import {Api} from "~/composables/useApi"

definePageMeta({
    layout: "custom",
});

</script>

<template>
    <div class="container mx-auto">
        <nuxt-link to="/" class="text-primary">Home</nuxt-link>
        <p>{{ Api.Page.all.slice(0, 2) }}</p>
        <pre>list will be here soon ...</pre>
    </div>

</template>