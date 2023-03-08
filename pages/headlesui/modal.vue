<template>
    <div class="py-6 px-3">
        <button class="btn-success" @click="open = !open">toggle modal</button>
        <button class="btn-success" @click="openDefault = !open">toggle Default Modal</button>
        <modal v-model="open">
            <template #icon>
                <div
                    class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <WrenchScrewdriverIcon class="h-6 w-6 text-green-600" aria-hidden="true"/>
                </div>
            </template>
            <template #title>You are Amazing!</template>
            <template #body>
                <div class="mt-2">
                    <p class="text-sm text-gray-500">
                        finally you did it, you should be proud of yourself
                    </p>
                </div>
            </template>
        </modal>

        <modal v-model="openDefault" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'panel'
})
import {ref, onMounted} from 'vue'
import {WrenchScrewdriverIcon} from '@heroicons/vue/24/outline'
const open = ref(true)
const openDefault = ref(false)
</script>