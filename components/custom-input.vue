<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
    modelValue: {type: String, default: ''},
    title: {type: String, default: 'MJ'}
})
const emit = defineEmits(['update:modelValue', 'update:title'])


const value = computed({
    get() {
        return props.title
    },
    set(value: string) {
        emit('update:title', value);
    }
});

</script>

<template>
    <input type="text" :value="modelValue" @input="$emit('update:modelValue' , $event.target.value)"/>
    <input type="text"
           class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
           v-model="value">
</template>