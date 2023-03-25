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
                        <ClockIcon class="icon"/>
                        <span>History</span>
                    </button>
                    <button class="btn">
                        <PlayCircleIcon class="icon"/>
                        <span>Preview</span>
                    </button>
                    <button class="btn-primary" @click="save">
                        <BookmarkIcon class="icon"/>
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

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {XMarkIcon, ArrowPathIcon, PlayCircleIcon, ClockIcon, BookmarkIcon} from "@heroicons/vue/24/outline";
import {useBlockLoader} from "../composables/useBlockLoader";

const blocks = ref([])

function save() {
    localStorage.setItem('blocks', JSON.stringify(blocks.value.map((b: any) => {
        let {component, ...block} = b;
        return block;
    })));
}

onMounted(() => {
    blocks.value = JSON.parse(localStorage.getItem('blocks') || "[]")
        .map((block: any) => {
            return {...block, component: useBlockLoader(block.name)} // load components dynamically
        })
})
</script>