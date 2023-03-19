<template>
    <div class="custom-scrollbar">
        <panel-sidebar v-model="sidebarOpen"/>
        <div :class="[ {'md:pl-64' : !hideSidebar} ,  'flex flex-1 flex-col']">
            <panel-header v-model="sidebarOpen"/>
            <main class="flex-1">
                <slot/>
            </main>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue'

const route = useRoute();
const sidebarOpen = ref(false)
const hideSidebar = computed(() => {
    return route.meta?.sidebar === false;
})
</script>