module.exports = function check(str, bracketsConfig) {
    let stack = []
  
    for(let bracket of str) {
      let bracketsIndex = bracketsConfig.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }