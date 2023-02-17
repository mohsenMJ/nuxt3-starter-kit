<script setup>
    const list = ref([
        {link : '/learning/ref' , title : 'REf & Reactive' },
        {link : '/learning/computed' , title : 'Computed Properties' },
        {link : '/learning/store' , title : 'Store' },
    ])
</script>

<template>
  <h3 class="">Learning Vue 3</h3>
  <ul>

    <li v-for="(item , index) in list" :key="index">
        <nuxt-link class="text-primary" :to="item.link">{{ item.title }}</nuxt-link>
    </li>
  </ul>

</template>