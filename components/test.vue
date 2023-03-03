<script setup>
import {reactive, computed , ref} from 'vue';

const age = ref(0);
const data = reactive({
    title: "First Component",
    note: 'here is some note about this component',
    date: new Date(),
    counter: 0
})

const toString = computed(() => {
    return data.title + ' -> ' + data.note + ' ' + data.date + ' : ' + data.counter + " ---- age :  " + age.value
})

function grow(){
    age.value += 10;
}

</script>

<template>
    <h1>{{ data.title }}</h1>
    <h2>{{ data.note }}</h2>
    <h3>{{ data.date }}</h3>
    <h3>{{ data.counter }}</h3>

    <p>{{ toString }}</p>
    <button class="btn-primary" @click="data.counter ++">Increment</button>
    <button class="btn-primary" @click="grow">grow</button>
    <button class="btn-primary" @click="age ++">direct grow</button>
</template>