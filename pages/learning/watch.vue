<script setup lang="ts">
import {ref, watch, reactive} from 'vue';

const question = ref('');
// const answer = ref('Questions usually contain a question mark. ;-)');
const state = reactive({
    answer: {
        answer: 'Questions usually contain a question mark. ;-',
        forced: false,
        image: ''
    }
});

watch(question, (newValue: string, oldValue: string) => {
    if (newValue.indexOf('?') > -1) {
        state.answer.answer = 'Thinking ... ';
        getAnswer(newValue)
    }
})

async function getAnswer(question: string) {
    try {

        let res: any = await fetch('https://yesno.wtf/api').then(res => res.json())
        console.log(res);
        // state.answer.answer = res.answer
        // state.answer.image = res.image
        // state.answer.forced = res.forced
        state.answer = res;
    } catch (e) {
        state.answer.answer = 'Could not reach the api! ' + e
    }

}
</script>

<template>
    <p>Ask a Yes/No question</p>
    <input type="text" v-model="question">
    <p>Your answer : {{ state.answer.answer }}</p>
    <img :src="state.answer.image" alt="image">
</template>