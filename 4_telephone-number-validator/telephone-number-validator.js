const checkCountry = (str) => {
  const countryCode1 = /^1/g;
  const countryCode2 =/^1\s/g;
  let areaPart = str;
  
  if (countryCode2.test(str) == true) {
     areaPart = str.substr(2);
  } else if (countryCode1.test(str) == true) {
    areaPart = str.substr(1);
  }
  return areaPart;
}

function telephoneCheck(str) {
  const areaCode = /^\d{10}$|^\d{3}\s\d{3}\s\d{4}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\s?\d{3}-\d{4}$/g;
  const areaStr = checkCountry(str);

  return areaCode.test(areaStr);
}

console.log(telephoneCheck("1(555)555-5555"));

