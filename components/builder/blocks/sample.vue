<template>
    <div class="flex items-center gap-4" v-if="!isEmpty">
        <img :src="model.image.value.src" class="bg-grey-50 object-cover h-96 object-cover"
             :alt="model.image.value.alt">
        <div class="flex flex-col items-start justify-center space-y-6 h-full p-9">
            <h4 class="text-2xl text-black">{{ model.title.value }}</h4>
            <p class="paragraph text-black whitespace-pre-line" v-html="model.paragraph.value"/>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useAddBlockItem} from "~/composables/useAddBlockItem";
import {StructureTypeEnum} from "~/interfaces/StructureTypeEnum";
import {computed, onMounted} from "vue";

const props = defineProps({
    modelValue: {
        type: Object, default: () => {
            return {}
        }
    }
})

const emit = defineEmits(['update:modelValue'])

let model = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
})

onMounted(() => {
    useAddBlockItem(model.value, 'title', {
        id: 1,
        type: StructureTypeEnum.String,
        title: 'Title',
        value: 'I am a new Title'
    });

    useAddBlockItem(model.value, 'image', {
        id: 2,
        type: StructureTypeEnum.Image,
        title: 'Upload Image',
        value : {
            src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/39f6c6b03f/content_dp-beautiful-screen-min-clikhq.png',
            alt: 'Some note about this image',
        }
    });

    useAddBlockItem(model.value, 'paragraph', {
        id: 2,
        type: StructureTypeEnum.Text,
        title: 'Paragraph Text',
        value: 'Quantum Dot produces over one billion colors, purer, richer, more brilliant and accurate colors than a regular' +
            'LCD TV. We could get into how it works. But it’s a lot easier to say it makes everything you watch look like the' +
            '4th of July.'
    });

    // model.value = {...model.value}
})

const isEmpty = computed(() => model.value && Object.keys(model.value).length === 0)
</script>