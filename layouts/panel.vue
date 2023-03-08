<template>
    <div class="custom-scrollbar">
        <panel-sidebar v-model="sidebarOpen"/>
        <div class="flex flex-1 flex-col md:pl-64">
            <panel-header v-model="sidebarOpen"/>
            <main class="flex-1">
                <slot/> <!-- here is the place where pages can load -->
            </main>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const sidebarOpen = ref(false)
</script>