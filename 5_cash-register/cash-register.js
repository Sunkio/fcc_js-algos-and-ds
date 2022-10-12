const UNITS = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01,
}

const getCidSum = (cid) => {
  let money = [];
  for (let i = 0; i < cid.length; i++) {
      money.push(cid[i][1]);
  }
  money = money.reduce((num, sum) => sum += num);
  return money;
}

const calculateChange = (changeAmt, cid, cidEqual) => {
  let change = [];
  let amtToChange = changeAmt;
  let sum = 0;
  for (let i in UNITS) {
    let num = amtToChange / UNITS[i];
    if (num >= 1.0) {
      for (let elem in cid) {
        if (cid[elem].indexOf(i) > -1) {
          let numCid = cid[elem][1] / UNITS[i];
        if (numCid >= 0) {
          if (numCid > num) {
            sum = UNITS[i] * Math.floor(num);
          } else {
            sum = UNITS[i] * Math.floor(numCid);
          }
          if (cidEqual) {
            change.unshift([i, sum]);
          } else {
            change.push([i, sum]);
          }
          amtToChange = (amtToChange - sum).toFixed(2);
          } else if ( numCid < 0 && cidEqual){
            change.unshift([i, 0]);
          }
          console.log("change: " + change);
        }
      }
     } else if (num < 1 && cidEqual) {
       change.unshift([i, 0]);
     }
   }
   if (amtToChange != 0) {
     change = [];
   }
  return change;
}

function checkCashRegister(price, cash, cid) {
  let change = [];
  const object = {
      "status": "INSUFFICIENT_FUNDS",
      "change": [],
  }
  const changeAmt = cash - price;
  const sumCid = getCidSum(cid);
  const cidEqual = changeAmt == sumCid;

  if (changeAmt > sumCid) {
    return object;
  } else {
    change = calculateChange(changeAmt, cid, cidEqual);
    if (change[0] == null) {
      return object;
    } else if (change[0] != null && changeAmt == sumCid) {
      return {"status": "CLOSED", change};
    } else {
      return {"status": "OPEN", change};
    }
  }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
