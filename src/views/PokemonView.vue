<template>
  <div>
    <div v-if="pokemon">
      <h2>Pokemon Data:</h2>
      <p>Name: {{ pokemon.name }}</p>
    </div>

    <div v-if="species">
      <h2>Species Data:</h2>
      <p>Name: {{ species.base_happiness }}</p>
    </div>

    <div v-if="evolution">
      <h2>Evolution Data:</h2>
      <p>Name: {{ evolution.evolutionName }}</p>
    </div>

    <div v-if="loadError">
      An error occurred while loading the pokemon:
      {{ loadError.message }}
    </div>
    <div v-if="loadSpeciesError">
      An error occurred while loading the species:
      {{ loadSpeciesError.message }}
    </div>

    <div v-if="loadEvolutionError">
      An error occurred while loading the evolution:
      {{ loadEvolutionError.message }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import usePokemon from '../composables/usePokemon'

const {
  load,
  loadwrong,
  loadSpecies,
  loadSpeciesWrong,
  loadEvolution,
  pokemon,
  species,
  evolution,
  error
} = usePokemon()

const loadError = computed(() => error.value.load)
const loadSpeciesError = computed(() => error.value.loadSpecies)
const loadEvolutionError = computed(() => error.value.loadEvolution)

const pokemonId = ref(1)
const speciesId = ref(1)
const evolutionId = ref(1)

load(pokemonId.value)
console.log('load called', pokemon.value)
loadSpecies(speciesId.value)
console.log('loadSpecies called')
loadEvolution(evolutionId.value)

console.log('loadEvolution called')

setTimeout(() => {
  pokemonId.value = 2
  loadwrong(pokemonId.value)
  setTimeout(() => {
    speciesId.value = 5
    loadSpeciesWrong(speciesId.value)
  }, 3000)
}, 3000)
</script>
