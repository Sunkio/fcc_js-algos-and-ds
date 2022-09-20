function palindrome(str) {
  let workString = "";
  let revWorkStr = "";
  const regExp = /[a-z0-9]/i;
  for(let i = 0; i < str.length; i++) {
    if (regExp.test(str[i])) {
      workString += str[i];
    }
  }
  workString = workString.toLowerCase();
  for (let i = workString.length - 1; i >= 0; i--) {
    revWorkStr += workString[i];
  }
  if(workString == revWorkStr) {
    return true;
  } else {
    return false;
  } 
}

palindrome("eye");
