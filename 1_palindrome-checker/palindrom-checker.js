function reverseStr (workStr) {
    let revStr = "";
    for (let i = workStr.length - 1; i >= 0; i--) {
     revStr += workStr[i];
  }
  return revStr;
}

function palindrome(str) {
  let workStr = "";
  let revStr = "";
  const regExp = /[a-z0-9]/ig;

  workStr = str.match(regExp).join("");
  workStr = workStr.toLowerCase();
  revStr = reverseStr(workStr);
  if (workStr === revStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");

