export const splitArrayIntoChunks = (array: any[], chunkSize: number) => {
  const groups = array.map((_: any, index: number) => {
    return index % chunkSize === 0 ? array.slice(index, index + chunkSize) : null
  }).filter((element: any) => { return element })

  return groups
}
