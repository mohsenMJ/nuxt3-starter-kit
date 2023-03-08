<template>
    <div class="shadow bg-white sm:overflow-hidden sm:rounded-md ">
        <div class="bg-white px-4 py-5 sm:p-6 space-y-6">
            <slot/>
        </div>

        <div v-if="$slots.actions" class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <slot name="actions"/>
        </div>
    </div>
</template>