<template>
    <div class="p-8 pb-0">
        <input v-model="keyword" type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"
            @change="searchMeals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal}}">
                <img :src="meal.strMealThumb" alt="strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>

            <div class="p-3">
                <h3 class=" font-bold"> {{ meal.strMeal }}</h3>
                <p class="mb-4">this is a paragrap lalalalalalla lalalalla <br>lalala <br>lalalalal</p>
                <div>
                    <a :href="meal.strYoutube" target="_blank"
                        class="px-3 py-2 rounded border-2 text-white border-2 border-red-600 bg-red-500 hover:bg-red-600 hover:text-white transition-colors">
                        Youtube</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchedMeals)

function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>