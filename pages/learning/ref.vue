<script setup>
import {ref , reactive  } from 'vue'

const count = ref(0);
const boolValue = ref(true);
const strValue = ref('Sample String')

const obj = reactive({
  title : 'learning vue.js'
})

function increment() {
  count.value++;
}
</script>

<template>
  <div class="p-4 space-y-2">
    <div>Welcome To <span class="text-warning font-bold">Counter</span></div>


    <div class="flex items-center gap-4">
      <h4>count : {{ count }}</h4>
      <button @click="increment" class="btn-primary"> increment (+1)</button>
      <button @click="count += 10" class="btn-primary"> increment (+10)</button>
    </div>
  </div>

  <hr class="my-2">

  <div>I am a Int Ref : <code>{{ count }} </code></div>
  <div>I am a boolean Ref : <code>{{ boolValue}} </code></div>
  <div>I am a string Ref : <code>"{{ strValue}}"</code></div>
  <div>
    I am a Object Reactive : <pre>{{ obj}}</pre>
    <button @click="obj.title = 'new title for current object'" class="btn-primary">update object</button>
  </div>


</template>