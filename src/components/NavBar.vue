<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-ful px-5">
            Home
        </router-link>
        <div class="flex items-center gap-1 ">
            <router-link :to="{ name: 'ByName' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Search Meals
            </router-link>
            <router-link :to="{ name: 'ByLetter' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By Letter
            </router-link>
            <router-link :to="{ name: 'ByIngredient' }"
                class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
                Meals By Ingredientes
            </router-link>
        </div>
</header></template>

