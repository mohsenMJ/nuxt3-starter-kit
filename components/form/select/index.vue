<template>
    <div>
        <label v-if="label" :for="slug" class="block text-sm font-medium text-gray-700">
            {{ label }}
        </label>

        <div class="mt-1">
            <select v-model="value" :name="slug" autocomplete="country-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                <option v-if="placeholder" disabled :value="null">{{ placeholder }}</option>
                    <option v-for="item in items" :key="item[itemTitle]" :value="item[itemValue]">
                        <slot :item="item">
                            {{
                            item[itemTitle]
                        }}
                        </slot>
                    </option>
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    modelValue: {type: String, default: ''},
    label: {type: String, default: ''},
    placeholder: {type: String, default: 'Enter Value'},
    prefix: {type: String, default: ''},
    type: {type: String, default: 'text'},
    rows: {type: Number, default: 3},
    items: {type: Array, default: () => []},
    itemTitle: {type: String, default: 'title'},
    itemValue: {type: String, default: 'value'},
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
})
const slug = computed(() => props.label.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''))
</script>