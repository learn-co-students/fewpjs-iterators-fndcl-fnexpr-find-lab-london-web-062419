const testVar = {}

function testFunc() {
  return "hi"
}

// const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5}
// ];


// const result = inventory.find( fruit => fruit.name === 'cherries' );

function superbowlWin(array) {
  const win = array.find(win => win.result === "W" )
  if (win) {return win.year}
}
