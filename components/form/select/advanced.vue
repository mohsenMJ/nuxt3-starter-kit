<template>
    <Listbox as="div" v-model="selected">
        <ListboxLabel v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</ListboxLabel>
        <div class="relative mt-1">
            <ListboxButton
                class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <slot name="selected" :selected="selected">
                <span class="flex items-center">
                    <img :src="selected.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                    <span class="ml-3 block truncate">{{ selected.name }}</span>
                </span>
                </slot>

                <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
        </span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                <ListboxOptions
                    class="custom-scrollbar absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="item in items" :key="item[itemTitle]"
                                   :value="itemValue ? item[itemValue] : item"
                                   v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">

                            <slot name="option" v-bind="{active , selected , item }">
                                <div class="flex items-center">
                                    <img :src="item.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                                    <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                            item.name
                                        }}</span>
                                </div>
                            </slot>

                            <span v-if="selected"
                                  :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>

import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import {computed} from "vue";

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
})
const emit = defineEmits(['update:modelValue'])

const selected = computed({
    get: () => props.modelValue,
    set: (newValue) => emit('update:modelValue', newValue)
})
</script>