<template>
    <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Form Page</h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
                Welcome to form pages
                <card class="grid grid-cols-2 gap-2">
                    <form-input label="Text" v-model="text"/>
                    <form-input key="a" label="Text" prefix="prefix:" v-model="text"/>
                    <form-textarea label="Text" prefix="prefix:" v-model="text"/>
                    <form-select label="Text" :items="list" v-model="country"/>
                    <form-select label="Text" :items="list" item-title="key" v-model="country"/>

                    <form-select label="Text" :items="list" v-model="country">
                        <template v-slot="{item}">{{ item.title + ' - v2 ' }}</template>
                    </form-select>

                    <p>you have selected {{ country }}</p>

                    <hr>

                    <form-select-advanced label="Advanced Select" v-model="selectedPerson" :items="people">

                        <template #selected="{ selected }">
                            <div class="flex items-center">
                                <img :src="selected.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                                <div>
                                    <span class="ml-3 block truncate">{{ selected.name }}</span>
                                    <span class="ml-3 block truncate text-xs text-gray-500">{{ selected.job }}</span>
                                </div>
                            </div>
                        </template>

                        <template #option="{ item , active , selected }">
                            <div class="flex items-center">
                                <img :src="item.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                                <div :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                    <div>
                                        {{ item.name }}
                                    </div>
                                    <div :class="[ active ? 'text-white' : 'text-gray-500' , 'text-xs']">
                                        {{ item.job }}
                                    </div>
                                </div>
                            </div>
                        </template>

                    </form-select-advanced>
                    <form-select-advanced label="Advanced Select" v-model="selectedPerson" :items="people">
                        <template #selected="{ selected }">
                            <div class="flex items-center">
                                <img :src="selected.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                                <span class="ml-3 block truncate">{{ selected.name }}</span>
                            </div>
                        </template>
                        <template #option="{ item , active , selected }">
                            <div class="flex items-center">
                                <img :src="item.avatar" alt="" class="h-6 w-6 flex-shrink-0 rounded-full"/>
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                    {{ item.name }}
                                </span>
                            </div>
                        </template>
                    </form-select-advanced>
                    <pre>{{ selectedPerson }}</pre>


                    <hr>

                    <form-select-autocomplete v-model="selectedPerson" :items="people" label="Autocompolete Field" />
                    <pre>{{selectedPerson}}</pre>
                    <div class="h-96"></div>

                </card>
            </div>
            <!-- /End replace -->
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

definePageMeta({
    layout: 'panel'
})

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
        job: 'Doctor',
        avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Devon Webb',
        job: 'Programmer',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Tom Cook',
        job: 'IT Man',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Tanya Fox',
        job: 'Worker',
        avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 6,
        name: 'Hellen Schmidt',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 7,
        name: 'Caroline Schultz',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 8,
        name: 'Mason Heaney',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 9,
        name: 'Claudie Smitham',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 10,
        name: 'Emil Schaefer',
        job: 'Teacher',
        avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
const selectedPerson = ref(people[3]);

const country = ref(null);
const text = ref('')
const list = ref([
    {title: 'United State', key: 'US', value: 1},
    {title: 'Canada', key: 'CA', value: 2},
    {title: 'Germany', key: 'DU', value: 3},
    {title: 'England', key: 'GB', value: 4},
])
</script>