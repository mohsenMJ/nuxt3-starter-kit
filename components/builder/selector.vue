<template>
    <div class="">
        <h4 class="font-semibold mb-4">Blocks List</h4>
        <ul>
            <li v-for="(group , index ) in blocksList.page" :key="index">
                <h5>{{ group.name }}</h5>
                <div class="space-y-2">
                    <div v-for="block in group.blocks " :key="block.name"
                         @click="addBlock(block)"
                         class="rounded-lg bg-gray-50 overflow-hidden border border-gray-200 cursor-pointer">
                        <img :src="`blocks/${block.image}`" alt="block image" class="w-full object-cover">
                        <h4 class="text-sm p-1.5">{{ block.title }}</h4>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, reactive} from "vue";
import {BlockInterface} from "~/interfaces/BlockInterface";
import {BLOCKS} from "~/data/blocks";

const blocksList = computed(() => {
    return BLOCKS()
})

const emit = defineEmits(['addBlock'])

function addBlock(block: any) {
    emit('addBlock', block);
}
</script>
