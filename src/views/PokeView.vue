<script setup>
    import { useRoute, useRouter } from "vue-router";
    import { useGetData } from "@/composables/getData";
    import { useFavoritosStore } from "@/store/favoritos";

    const {data, getData, loading, error} = useGetData()

    const route = useRoute();
    const router = useRouter();

    const useFavoritos = useFavoritosStore();

    const { add, findPoke } = useFavoritos;
    const back = () => {
        router.push('/pokemons');        
    }

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
    
</script>


<template>
    <p v-if="loading">Cargando</p>
    <div class="alert alert-danger mt-2" v-if="error">No existe el Pokemon</div>
    <div v-if="data">
        <img :src="data.sprites?.front_default" alt=""> 
        <h1>Poke name: {{ $route.params.name }}</h1>
        <button class="btn btn-primary mb-2" :disabled="findPoke(data.name)" @click="add(data)">Agregar a Favoritos</button>
    </div>
    <button @click="back" class="btn btn-outline-primary">Back</button>
</template>