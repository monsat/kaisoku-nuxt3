let counter = -1
const renderedOn = (new Date()).getTime()

export default () => {
  counter++
  return {
    counter,
    renderedOn,
  }
}
