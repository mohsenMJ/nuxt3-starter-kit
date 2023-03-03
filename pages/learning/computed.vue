<script setup>
import {ref, computed} from 'vue';

const firstName = ref('join')
const lastName = ref('Doe');

const fullName = computed({
    get() {
        return firstName.value + ' ' + lastName.value;
    },
    set(name) {
        [firstName.value, lastName.value] = name.split(' ');
    }
});

function updateName() {
    fullName.value = "Mohsen Majidi"
}
</script>

<template>
    <h2>your name is : {{ firstName }} {{ lastName }}</h2>
    <h3>your full name is : {{ fullName }}</h3>
    <button class="btn btn-primary" @click="updateName">Update Name</button>

</template>