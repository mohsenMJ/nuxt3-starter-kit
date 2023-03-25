<template>
    <form-textarea :label="item.title" v-model="item.value"/>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {StructureInterface} from "~/interfaces/StructureInterface";

const props = defineProps({
    modelValue: {
        type: Object as PropType<StructureInterface>,
        required: true,
        default: () => {
        }
    }
})
const emit = defineEmits(['update:modelValue'])
const item = computed({
    get: () => props.modelValue,
    set: (newValue) => {
        console.log('string component : ', newValue);
        emit('update:modelValue', newValue)
    }
});
</script>
