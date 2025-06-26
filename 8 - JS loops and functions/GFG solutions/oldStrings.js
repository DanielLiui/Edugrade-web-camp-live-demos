
function log(data) { console.log(data) }


/*
Steps:
1. Write input and output examples. Try to cover all cases.

2. Mentally map a basic solution and code. Do not make function too long, use custom 
functions to lay out your algorithm then implement custom functions or ask GPT to 
code them

3. Check over code, then test

4. Fix any mistakes until code is good

*/

/*
Input: s = "[{()}]"
Output: true

Input: s = "[()()]{}"
Output: true

Input: s = "([]"
Output: False

*/


function balancedBrackets(s) {
  //for first opening bracket, check if there is a closing bracket
  //if there is, remove both brackets
  //repeat until s contains no more brackets

  let S = s.split('')  //turn into array of letters for easier modification
  log(S)
  
  while (S.length > 0) {
    let closingBracketIndex = findClosingBracketIndex(S)  //for first bracket
    log("closing index: " + closingBracketIndex)

    if (closingBracketIndex == -1) {  //not found
      return false
    }
    else {
      //found closing bracket, now remove both brackets
      S.splice(closingBracketIndex, 1)
      S.splice(0, 1)
      log(S)
    }
  }

  //found all closing brackets
  return true  
}


function findClosingBracketIndex(S) {
  let closing_i = -1

  if (S[0] == '[') {
    closing_i = S.indexOf(']')
  }
  else if (S[0] == '(') {
    closing_i = S.indexOf(')')
  }
  else if (S[0] == '{') {
    closing_i = S.indexOf('}')
  }

  return closing_i
}

let brackets1 = "[{()}]"
let brackets2 = "[()()]{}"
let brackets3 = "([]"

log(balancedBrackets(brackets3))

