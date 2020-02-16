const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records) {
  let win = records.find(record => record.result === 'W')
  if (win.length > 0) {
    return win.year
  } else return undefined

}
