<template>
    <Popover class="relative">
        <PopoverButton>Solutions</PopoverButton>

        <PopoverPanel class="absolute z-10">
            <div class="grid grid-cols-2">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
        </PopoverPanel>
    </Popover>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'panel'
})
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>