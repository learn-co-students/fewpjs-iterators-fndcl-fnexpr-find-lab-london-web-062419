const superbowlWin = (array) => {
  // array.find( record => record.result == "W")
  const winningRecord = array.find(record => record.result == "W")
  return !!winningRecord ? winningRecord.year : undefined
}