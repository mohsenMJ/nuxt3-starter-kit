<template>
    <div class="h-screen flex flex-col">
        <div class="py-2.5 bg-white shadow ">
            <div class="container mx-auto h-full flex items-center justify-between">
                <div class="row">
                    <button @click="$router.push('/')">
                        <XMarkIcon class="w-8 h-8"/>
                    </button>
                    <div>
                        <h1 class="text-lg font-semibold text-gray-900">Page Builder</h1>
                        <h4 class="text-base text-gray-400">Products</h4>
                    </div>
                </div>

                <div class="row ">
                    <button class="btn">
                        <ClockIcon class="h-5 w-5"/>
                        <span>History</span>
                    </button>
                    <button class="btn">
                        <PlayCircleIcon class="h-5 w-5 text-blue-500"/>
                        <span>Preview</span>
                    </button>
                    <button class="btn-primary">
                        <BookmarkIcon class="icon h-5 w-5"/>
                        <span>Save Page</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="p-4 flex-1">
            <builder v-model="blocks"/>
        </div>
    </div>

</template>

<script setup>
import {ref} from 'vue';
import {XMarkIcon, ArrowPathIcon, PlayCircleIcon, ClockIcon , BookmarkIcon} from "@heroicons/vue/24/outline";

const blocks = ref([])

// definePageMeta({
// layout: 'panel',
// sidebar : false
// })
</script>