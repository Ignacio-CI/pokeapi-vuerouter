import { defineStore } from 'pinia'
import { ref } from 'vue'

// Composition API
export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([]);

    if (localStorage.getItem('favoritos')) {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'));
    }

    const add = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(poke => poke.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }

    const findPoke = (name) => {
        return favoritos.value.find(poke => poke.name === name);
    }

    return {
        favoritos,
        add,
        remove,
        findPoke,
    }
});