const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const win = array.find(r => r.result === "W" )
  if (win) {
    return win.year
  }
}
