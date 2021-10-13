let counter = 0
const renderedOn = new Date()

export default () => {
  counter++
  return JSON.stringify({
    counter,
    renderedOn,
  })
}
