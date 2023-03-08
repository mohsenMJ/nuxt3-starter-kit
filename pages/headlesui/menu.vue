<template>

    <div class="py-6 h-96 px-3 space-y-2">
        <nuxt-link to="/headlesui/combobox">Headles Combo</nuxt-link>
        <hr>
        <Menu as="div" class="relative">
            <div>
                <MenuButton
                    class="inline-flex justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    Options
                    <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                     aria-hidden="true"/>
                </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute left-0 z-10 mt-2 w-48  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                    <template v-for="item in userNavigation" :key="item.name">
                        <hr v-if="item.name === 'divider' " class="border-gray-100">
                        <MenuItem v-else v-slot="{ active }">
                            <button @click="itemClicked(item)"
                                    :class="[active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700']">
                                {{ item.name }}
                            </button>
                        </MenuItem>
                    </template>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/24/outline'

definePageMeta({
    layout: 'panel'
})

const router = useRouter();

const userNavigation = [
    {name: 'Your Profile', href: '/headlesui/menu'},
    {name: 'Settings', href: '/headlesui/combobox'},
    {name: 'divider'},
    {name: 'Sign out', href: '/headlesui/dialog'},
]

function itemClicked(item: any) {
    router.push(item.href)
}
</script>