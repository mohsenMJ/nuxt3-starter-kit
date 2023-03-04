<template>
    <div class="container mx-auto">
        <slot/>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    transition-duration: 500ms;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}

</style>