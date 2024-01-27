import { ref, computed } from 'vue'
import type { Ref } from 'vue'

interface ErrorRecord {
  load: Error | null
  loadSpecies: Error | null
  loadEvolution: Error | null
}

const errorsFactory = (): ErrorRecord => ({
  load: null,
  loadSpecies: null,
  loadEvolution: null
})

export default function usePokemon() {
  const pokemon: Ref<any | null> = ref(null)
  const species: Ref<any | null> = ref(null)
  const evolution: Ref<any | null> = ref(null)
  const error: Ref<ErrorRecord> = ref(errorsFactory())

  const load = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      pokemon.value = await response.json()
      error.value.load = null
    } catch (err) {
      error.value.load = err as Error
    }
  }
  const loadwrong = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon2/${id}`)
      pokemon.value = await response.json()
      error.value.load = null
    } catch (err) {
      error.value.load = err as Error
    }
  }

  const loadSpecies = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      species.value = await response.json()
      error.value.loadSpecies = null
    } catch (err) {
      error.value.loadSpecies = err as Error
    }
  }
  const loadSpeciesWrong = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species-x/${id}`)
      species.value = await response.json()
      error.value.loadSpecies = null
    } catch (err) {
      error.value.loadSpecies = err as Error
    }
  }

  const loadEvolution = async (id: number) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
      evolution.value = await response.json()
      error.value.loadEvolution = null
    } catch (err) {
      error.value.loadEvolution = err as Error
    }
  }

  return {
    pokemon,
    species,
    evolution,
    load,
    loadwrong,
    loadSpecies,
    loadSpeciesWrong,
    loadEvolution,
    // 用不用 computed 的差別在哪？
    // error: computed(() => error.value)
    error
  }
}
