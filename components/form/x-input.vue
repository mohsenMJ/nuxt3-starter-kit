<template>
    <div>
        <label v-if="label" :for="slug" class="block text-sm font-medium text-gray-700">
            {{ label }}
        </label>

        <div class="mt-1 flex rounded-md shadow-sm">
            <span v-if="prefix"
                  class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                {{ prefix }}
            </span>
            <input v-model="value" :type="type" :name="slug"
                   :class="[prefix ? 'rounded-none rounded-r-md' : 'rounded-md' ,
                        'block w-full flex-1  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm']"
                   :placeholder="placeholder"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, watch} from "vue";

const props = defineProps({
    modelValue: {type: String, default: ''},
    label: {type: String, default: ''},
    placeholder: {type: String, default: 'Enter Value'},
    prefix: {type: String, default: ''},
    type: {type: String, default: 'text'},
})
const emit = defineEmits(['update:modelValue', 'update:prefix'])

const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
})

watch(value, (newValue) => emit('update:prefix', props.prefix + newValue))

const slug = computed(() => props.label.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''))
</script>