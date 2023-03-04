<script setup lang="ts">
import {Api} from "~/utils/api-store";
</script>

<template>
    <nuxt-layout>
        <nuxt-link to="/" class="text-primary">Home</nuxt-link>
        <p>{{ Api.Page.all.slice(0, 2) }}</p>
        <pre>list will be here soon ...</pre>
    </nuxt-layout>
</template>