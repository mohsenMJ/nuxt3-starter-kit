<template>
    <div class="flex gap-3">
        <div class="rounded-lg p-2 bg-white shadow flex-1 space-y-4">
            <!--            <builder-blocks-sample v-model="obj.structure"/>-->
<!--            <pre>{{ blocks }}</pre>-->

<!--            <div v-for="block in blocks" :key="block.name + block.id">{{ block.name }}</div>-->

            <component :is="block.component"
                       v-for="block in blocks" :key="block.name + block.id"
                       v-model="block.structure"/>
            <!--            <builder-blocks-drop/>-->
        </div>

        <div class=" rounded-lg w-72 bg-white shadow p-2.5">

<!--            <pre>{{ blocks[0] }}</pre>-->

            <builder-structure-editor v-if="blocks.length > 0" v-model="blocks[0]"/>

<!--            Componenet Structues / Component Lists-->
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, defineAsyncComponent, onMounted, reactive} from "vue";
import Builder from "~/pages/builder.vue";
import {BlockInterface} from "~/interfaces/BlockInterface";

const props = defineProps({
    modelValue: {
        type: Array, default: () => []
    }
})
const emit = defineEmits(['update:modelValue'])
const blocks = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
});

// const selectedComponent = reactive({});

onMounted(() => {
    addBlock({
        id: 0,
        name: 'Sample',
        title: 'Sample Component',
        image: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/39f6c6b03f/content_dp-beautiful-screen-min-clikhq.png',
        structure: {},
    })
})

function addBlock(block: BlockInterface) {
    blocks.value.push({
        ...block,
        component: defineAsyncComponent(() => import("./blocks/" + block.name + '.vue')),
    })
    // selectedComponent
}
</script>
