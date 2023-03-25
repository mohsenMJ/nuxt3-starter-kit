<template>
    <div class="relative">
        <div v-if="selectable" @click="componentSelected"
             class="z-10 absolute top-0 left-0 w-full h-full bg-green-500 bg-opacity-30 cursor-pointer flex flex-col items-center justify-center space-y-4">
            <div class="text-2xl text-white font-semibold"> #{{ block.name }}{{ block.id }}</div>
        </div>

        <div :class="['p-2 min-h-[60px] overflow-hidden rounded-lg border-2 border-gray-100 transition duration-200 cursor-pointer relative group',
             {'hover:border-gray-300' : !block.selected , 'border-gray-500' : block.selected }]">
            <div class="absolute top-2 right-2 flex items-center space-x-1 z-10 hidden group-hover:flex">

                <button @click.stop="moveUpBlock" title="move up"
                        class="w-9 h-9 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <ArrowUpIcon class="w-5"/>
                </button>
                <button @click.stop="moveDownBlock" title="move down"
                        class="w-9 h-9 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <ArrowDownIcon class="w-5"/>
                </button>
                <button
                    @click.stop="duplicateBlock" title="duplicate"
                    class="w-9 h-9 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <DocumentDuplicateIcon class="w-5"/>
                </button>
                <button
                    @click.stop="deleteBlock" title="delete"
                    class="w-9 h-9 rounded bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    <TrashIcon class="w-5"/>
                </button>
            </div>
            <slot/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {TrashIcon, ArrowUpIcon, ArrowDownIcon, DocumentDuplicateIcon} from "@heroicons/vue/24/outline";
import {PropType} from "@vue/runtime-core";
import {BlockInterface} from "~/interfaces/BlockInterface";

const props = defineProps({
    selectable: {type: Boolean, default: false},
    block: {
        type: Object as PropType<BlockInterface>,
        default: () => {
        }
    }
})

const emit = defineEmits(['component-selected', 'delete', 'duplicate', 'move-up', 'move-down', 'edit'])

function componentSelected() {
    emit('component-selected', props.block);
}

function deleteBlock() {
    emit('delete', props.block);
}

function duplicateBlock() {
    emit('duplicate', props.block);
}

function moveUpBlock() {
    emit('move-up', props.block);
}

function moveDownBlock() {
    emit('move-down', props.block);
}

function edit() {
    emit('edit', props.block);
}
</script>