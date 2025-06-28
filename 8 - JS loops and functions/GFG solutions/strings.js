
function log(data) { console.log(data) }


/*
Steps:
1. Write input and output examples. Try to cover all cases.

2. Mentally map a basic solution and write steps using comments. Check if algorithm
works on examples. If so, code. If not, fix algorithm.

2.1. Code. Do not make function too long, use custom 
functions to lay out your algorithm then implement custom functions or ask GPT to 
code them

3. Check solution and test. Print different steps of the code to see what is 
going on. It will help find where errors are and what is causing them.

Start testing the custom functions you wrote.

4. Keep testing until code is good


If you get stuck:
- Try to locate error and see what it is. To do so, you need print statements
to track what is going on

- Once you know what the error is and where it is, try to fix it
- If you do not know how to fix it or you do not know what the error is, 
it is ok to ask a large language model like GPT

- If you still cannot fix the error, move on to another problem
or take a break. You are already stressing enough over them problem and 
it helps to clear your mind and come back later.

- When you come back, you will probably know how to solve the problem.
If you still do not know, ask for help, ask different large language models, 
or use another solution.


Exs:
Input: s = "[{()}]"
Output: true

Input: s = "[()()]{}"
Output: true

Input: s = "([]"
Output: False

*/

function balancedBrackets(s) {
  //find closing bracket for first bracket
  //if no closing bracket, return false
  //if there is, then remove brackets
  //repeat until all brackets are removed. If all brackets are removed, s is balanced

  let S = s.split('')  //return all characters as an array
  log(S)

  while (S.length > 0) {
    let closingBracketIndex = findClosingBracketIndex(S)  //for the first bracket
    log("closing bracket index: " + closingBracketIndex)

    if (closingBracketIndex == -1) {  //not found
      return false
    }
    else {
      //remove brackets
      S.splice(closingBracketIndex, 1)
      S.splice(0, 1)
      log(S)
    }
  }
  
  return true
}


function findClosingBracketIndex(S) {  //S = array of characters
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

log(balancedBrackets(brackets1))