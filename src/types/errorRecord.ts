export interface ErrorRecord {
  loadAll: Error | null
  loadOne: Error | null
  loadEvolution: Error | null
}

export const errorsFactory = (): ErrorRecord => ({
  loadAll: null,
  loadOne: null,
  loadEvolution: null
})
