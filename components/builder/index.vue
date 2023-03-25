<template>

    <div class="flex gap-3 max-h-[87vh]">
        <div class=" flex-1">
            <div class="rounded-lg p-2 bg-white shadow space-y-2 overflow-y-auto custom-scrollbar max-h-full">


                <builder-blocks-container v-for="(block , index) in blocks" :key="block.name + block.id + '_' + index"
                                          :block="block" @click="selectBlock(block)"
                                          @delete="deleteBlock(index)"
                                          @duplicate="duplicateBlock(index)"
                                          @move-up="moveUpBlock(index)"
                                          @move-down="moveDownBlock(index)">
                    <component :is="block.component" v-model="block.structure"/>
                </builder-blocks-container>

                <builder-blocks-drop/>
            </div>

        </div>

        <div class=" rounded-lg w-72 bg-white shadow p-2.5 overflow-y-auto custom-scrollbar max-h-full">

            <builder-structure-editor
                v-if="data.selectedBlock.hasOwnProperty('id')"
                v-model="data.selectedBlock"
                @close="closeEditor"
            />

            <builder-selector v-else @addBlock="addBlock"/>
<!--            <div v-else>-->
<!--                <button class="btn" @click="addSampleBlock">Add Component</button>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, reactive} from "vue";
import {BlockInterface} from "~/interfaces/BlockInterface";
import {BLOCKS} from "~/data/blocks";
import Builder from "~/pages/builder.vue";

let data = reactive({
    selectedBlock: {}
});

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(['update:modelValue'])

const blocks = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
});

function addSampleBlock() {
    addBlock({
        id: 0,
        name: 'Sample',
        title: 'Sample Component',
        image: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/39f6c6b03f/content_dp-beautiful-screen-min-clikhq.png',
    })
}

function addBlock(block: any, position: number = -1) {
    const component = defineAsyncComponent(() => import("./blocks/" + block.name + '.vue'));
    let newBlock = {structure: {}, ...block, id: blocks.value.length + 1, selected: false, component}
    if (position < 0) blocks.value.push(newBlock)
    else blocks.value.splice(position + 1, 0, newBlock);
}

function selectBlock(block: BlockInterface) {
    data.selectedBlock = block;
    blocks.value?.forEach((b: any) => b.selected = false);
    block.selected = true;
}

function deleteBlock(index: number) {
    closeEditor();
    blocks.value.splice(index, 1);
}

function duplicateBlock(index: number) {
    addBlock(JSON.parse(JSON.stringify({
        ...(blocks.value[index] as any),
        id: blocks.value?.length + 1,
        selected: false,
    })), index)
}

function moveUpBlock(index: number) {
    if (index > 0 && blocks.value.length > 1) {
        const block = blocks.value.splice(index, 1)[0];
        blocks.value.splice(index - 1, 0, block);
    }
}

function moveDownBlock(index: number) {
    if (blocks.value.length > 1 && index < blocks.value.length) {
        const block = blocks.value.splice(index, 1)[0];
        blocks.value.splice(index + 1, 0, block);
    }
}

function closeEditor() {
    data.selectedBlock = {};
}
</script>
