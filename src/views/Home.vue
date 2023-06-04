<template>
    <div class="flex flex-col p-8 ">

        <div class="flex gap-2 justify-center mt-2">
            <router-link :to="{name: 'ByLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <pre>
        </pre>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const ingredients = ref([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
})

</script>