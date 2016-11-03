// This is the file that components will call to fire off a action
export default actions = {
  sampleAction (text) {
    return {
      type: 'SAMPLE_ACTION',
      text: text
    }
  }
}
