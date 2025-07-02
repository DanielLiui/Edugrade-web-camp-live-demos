/*
Encode message
=====
Input:                            
WE ARE DISCOVERED FLEE AT ONCE    

Output:
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

WECRLTEERDSOEEFEAOCAIVDEN

Input:
FLEE NOW

Output:
F...N..
.L.E.O.
..E...W

FNLEOEW

*/


function encodeRailCipher(message) {
  //put characters in zig zag pattern (use column arrays)
  //read letters in first row, 2nd row, and 3rd row -> add to encoding string

  let dotCode = getDotCode(message)
  logDotCode(dotCode)
  encoding = readDotCode(dotCode)

  return encoding
}


function getDotCode(message) {
  // Remove spaces from the message
  message = message.replaceAll(' ', '')
  
  // Create 3 rows
  let row1 = []
  let row2 = []
  let row3 = []
  
  // Track current row and direction
  let currentRow = 0
  let direction = 1 // 1 for down, -1 for up
  
  // Place each character in the zigzag pattern
  for (let i = 0; i < message.length; i++) {
    // Fill all rows with dots for this position
    row1.push('.')
    row2.push('.')
    row3.push('.')
    
    // Place the character in the current row
    if (currentRow === 0) {
      row1[i] = message[i]
    } else if (currentRow === 1) {
      row2[i] = message[i]
    } else if (currentRow === 2) {
      row3[i] = message[i]
    }
    
    // Move to next row in zigzag pattern
    currentRow += direction
    
    // Change direction when we hit the top or bottom
    if (currentRow === 0 || currentRow === 2) {
      direction *= -1
    }
  }
  
  return [row1, row2, row3]
}


function readDotCode(dotCode) {
  let encoding = ""
  
  // Read from each row in order: row1, row2, row3
  for (let row of dotCode) {
    for (let char of row) {
      // Only add characters that are not dots
      if (char != '.') {
        encoding += char
      }
    }
  }
  
  return encoding
}


function logDotCode(dotCode) {
  for (let row of dotCode) {
    log(row)
  }
}


let message = "FLEE NOW"
let message2 = "WE ARE DISCOVERED FLEE AT ONCE"
log(encodeRailCipher(message2))
