<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useCookie} from "#app";
import {useAccessToken} from "~/composables/useAccessToken";
import {Api} from "~/composables/useApi";

let pages = ref<Array<any>>([]);
onMounted(() => {
    // fetchPages();
})

function fetchPages() {
    // pages.value = [];
    Api.Page.all = [];
    // Api.Page.getAllPages()
    Api.Page.getAllPages();
    // .then(response => {
    //     pages.value = [{message : 'data loaded'}]
    // pages.value = response.data?.data as Array<any>
    // })
}

</script>

<template>
    <div class="h-screen w-100 p-10">
        <div class="flex flex-col justify-center items-center gap-5">
            <div class="text-2xl font-bold">Welcome To Nuxt/Vue 3</div>
            <!--                <NuxtLink class="text-primary" to="/counter">counter sample page</NuxtLink>-->
        </div>


        <div class="space-y-2">
            <div class="flex items-center gap-2">
                <button @click="fetchPages" class="btn-success">load data</button>
                <nuxt-link to="/list" class="text-primary">show list</nuxt-link>
            </div>
            <pre v-if="Api.Page.loading">loading data from server</pre>
            <pre v-if="pages.length > 0" class="w-60">{{ pages }}</pre>
            <!--                <p v-if="Api.Page.all.length > 0" class="w-60 text-success text-center mx-auto">Data loaded from server !!!</p>-->
            <!--                <p v-if="Api.Page.all.length > 0" class="w-60 text-success text-center mx-auto">{{ Api.Page.all.slice(0 , 2)}}</p>-->
            <ul>
                <li v-for="page in Api.Page.all.slice(0,10)" :key="page.id">{{ page.title }}</li>
            </ul>
        </div>

    </div>
</template>