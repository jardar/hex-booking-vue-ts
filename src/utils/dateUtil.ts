export function parseBirth(birthStr: string) {
  const [year, month, day] = birthStr.split('/')
  return { year, month, day }
}
