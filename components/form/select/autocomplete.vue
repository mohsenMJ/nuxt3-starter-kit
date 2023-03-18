<template>
    <Combobox as="div" v-model="selected">
        <ComboboxLabel class="block text-sm font-medium text-gray-700">{{ label }}</ComboboxLabel>
        <div class="relative mt-1">
            <ComboboxInput
                class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                @change="query = $event.target.value"
                :display-value="displayValue"/>

            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
            </ComboboxButton>

            <ComboboxOptions v-if="selectedItems.length > 0"
                             class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                <div v-if="selectedItems.length === 0 && query !== ''"
                     class="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                </div>

                <ComboboxOption v-for="item in selectedItems" :key="item.id" :value="item" as="template"
                                v-slot="{ active, selected }">
                    <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
                        <slot name="option" v-bind="{active , selected , item}">
                            <span :class="['block truncate', selected && 'font-semibold']">
                                {{ item.name }}
                            </span>
                        </slot>
                        <span v-if="selected"
                              :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-indigo-600']">
                            <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                        </span>
                    </li>
                </ComboboxOption>
            </ComboboxOptions>
        </div>
    </Combobox>
</template>

<script setup>


import {computed, ref} from 'vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'


const props = defineProps({
    modelValue: {type: String, default: ''},
    label: {type: String, default: ''},
    placeholder: {type: String, default: 'Enter Value'},
    prefix: {type: String, default: ''},
    type: {type: String, default: 'text'},
    rows: {type: Number, default: 3},
    items: {type: Array, default: () => []},
    itemTitle: {type: String, default: ''},
    itemValue: {type: String | null, default: null},
    displayValue: {type: Function, default: (item) => item?.name},
    filter: {type: Function, default: () => {}},

})
const emit = defineEmits(['update:modelValue'])

const selected = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
})

const query = ref('')
const selectedItems = computed(() =>
    query.value === ''
        ? props.items
        : props.items.filter((item) => {
            return item.name.toLowerCase().includes(query.value.toLowerCase())
        })
)
</script>