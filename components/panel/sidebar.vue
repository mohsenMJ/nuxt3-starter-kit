<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-40 " @close="open = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                             enter-from="opacity-0" enter-to="opacity-100"
                             leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                             leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-600 bg-opacity-75"/>
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                 enter-from="-translate-x-full" enter-to="translate-x-0"
                                 leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                 leave-to="-translate-x-full">
                    <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                        <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                         enter-to="opacity-100" leave="ease-in-out duration-300"
                                         leave-from="opacity-100" leave-to="opacity-0">
                            <div class="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button"
                                        class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        @click="open = false">
                                    <span class="sr-only">Close sidebar</span>
                                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                </button>
                            </div>
                        </TransitionChild>
                        <div class="flex flex-shrink-0 items-center px-4">
                            <img class="h-8 w-auto"
                                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                 alt="Your Company"/>
                        </div>
                        <div class="mt-5 h-0 flex-1 overflow-y-auto">
                            <nav class="space-y-1 px-2">
                                <nuxt-link v-for="item in navigation" :key="item.name" :to="item.to" @click="close"
                                           :class="[item.to === route.path ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer']">
                                    <component :is="item.icon"
                                               :class="[item.to === route.path ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-4 flex-shrink-0 h-6 w-6']"
                                               aria-hidden="true"/>
                                    {{ item.name }}
                                </nuxt-link>
                            </nav>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                <div class="w-14 flex-shrink-0" aria-hidden="true">
                    <!-- Dummy element to force sidebar to shrink to fit close icon -->
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col " v-if="!hideSidebar">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 custom-scrollbar">
            <div class="flex flex-shrink-0 items-center px-4">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                     alt="Your Company"/>
            </div>
            <div class="mt-5 flex flex-grow flex-col">
                <nav class="flex-1 space-y-1 px-2 pb-4">
                    <nuxt-link v-for="item in navigation" :key="item.name" :to="item.to"
                               :class="[item.to === route.path ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer']">
                        <component :is="item.icon"
                                   :class="[item.to === route.path ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                                   aria-hidden="true"/>
                        {{ item.name }}
                    </nuxt-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
    modelValue: {type: Boolean, default: false},
    showStatic: {type: Boolean, default: true}
})
const emit = defineEmits(['update:modelValue'])

const open = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit('update:modelValue', newValue)
    }
})

const route = useRoute();

const navigation = [
    {name: 'Dashboard', to: '/', icon: HomeIcon},
    {name: 'Team', to: '/team', icon: UsersIcon},
    {name: 'Form', to: '/form', icon: FolderIcon},
    {name: 'Page Builder', to: '/builder', icon: CalendarIcon},
    {name: 'Documents', to: '/', icon: InboxIcon},
    {name: 'Reports', to: '/', icon: ChartBarIcon},
]

const hideSidebar = computed(() => {
    return route.meta?.sidebar === false;
})

function close() {
    open.value = false;
}

</script>