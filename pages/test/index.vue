<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {Api} from "~/composables/useApi";

let pages = ref<Array<any>>([]);
onMounted(() => {
})

function fetchPages() {
    // Api.Page.all = [];
    Api.Page.getAllPages();
}

</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-2xl font-semibold">Home Page </h1>
        <p class="mt-4">this is home page</p>
        <nuxt-link to="/about" class="text-primary">About</nuxt-link>
    </div>
<!--    <div class="flex flex-col justify-center items-center gap-5">-->
<!--        <div class="text-2xl font-bold">Welcome To Nuxt/Vue 3</div>-->
<!--    </div>-->
<!--    <div class="space-y-2">-->
<!--        <div class="flex items-center gap-2">-->
<!--            <button @click="fetchPages" class="btn-success">load data</button>-->
<!--            <nuxt-link to="/list" class="text-primary">show list</nuxt-link>-->
<!--            <nuxt-link to="/about" class="text-primary">About Us</nuxt-link>-->
<!--        </div>-->
<!--        <pre v-if="Api.Page.loading">loading data from server</pre>-->
<!--        <pre v-if="pages.length > 0" class="w-60">{{ pages }}</pre>-->
<!--        &lt;!&ndash;                <p v-if="Api.Page.all.length > 0" class="w-60 text-success text-center mx-auto">Data loaded from server !!!</p>&ndash;&gt;-->
<!--        &lt;!&ndash;                <p v-if="Api.Page.all.length > 0" class="w-60 text-success text-center mx-auto">{{ Api.Page.all.slice(0 , 2)}}</p>&ndash;&gt;-->
<!--        <ul>-->
<!--            <li v-for="page in Api.Page.all.slice(0,10)" :key="page.id">{{ page.title }}</li>-->
<!--        </ul>-->
<!--    </div>-->
</template>