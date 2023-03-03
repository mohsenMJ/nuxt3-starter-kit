<script setup>

import {ref, reactive} from 'vue';

const list = ref([
    {message: 'Foo'},
    {message: 'Bar'},
])

const obj = reactive({
    counter: 0,
    increment(){
        this.counter++
    }
})

function addItem() {
    list.value.push({
        message: 'New Item #' + (list.value.length + 1)
    })
}
</script>

<template>
    <button @click="addItem" class="btn-success">add Item</button>
    <ul>
        <li v-for="item in list" :key="item.message">{{ item.message }}</li>
    </ul>
    <hr>
    <p>counter : {{ obj.counter }}</p>
    <button @click="obj.increment">increment</button>
</template>