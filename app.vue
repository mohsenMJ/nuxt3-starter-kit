<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
    /*transition: all 0.1s;*/
}
.page-enter-from,
.page-leave-to {
    /*opacity: 0;*/
    /*filter: blur(1rem);*/
}

/*.rotate-enter-active,*/
/*.rotate-leave-active {*/
/*    transition: all 0.4s;*/
/*}*/
/*.rotate-enter-from,*/
/*.rotate-leave-to {*/
/*    opacity: 0;*/
/*    transform: rotate3d(1, 1, 1, 15deg);*/
/*}*/



.layout-enter-active,
.layout-leave-active {
    transition: all 5s;
}
.layout-enter-from,
.layout-leave-to {
    /*filter: grayscale(1);*/
    opacity: 0;
    filter: blur(1rem);
}

</style>