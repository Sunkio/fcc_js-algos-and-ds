function convertChar (j, alphabet) {
  let convertedChar = "";

  if (j < 13) {
    convertedChar = alphabet[j + 13];
  } else {
    convertedChar = alphabet [j - 13];
  }
  return convertedChar;
}


function rot13(str) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let decodedStr = "";
  let j = -1;

  for (let i = 0; i < str.length; i++) { 
    j = alphabet.indexOf(str[i]);
    if (j > -1) {
      decodedStr += convertChar(j, alphabet);
    } else {
      decodedStr += str[i];
    }
  }  
  return decodedStr;
}

console.log(rot13('SERR PBQR PNZC'));
