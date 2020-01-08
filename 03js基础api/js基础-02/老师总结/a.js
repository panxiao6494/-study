var str = "";

for (let i = 0, k = 0; i < 14; i++) {
  //上部分 上分为 四个部分
  if (i < 3) {
    for (let j = 0; j < 5 - 2 * i; j++) {
      str += " ";
    }
    if (i == 2) {
      for (let j = 0; j < 6 + 4 * i - 1; j++) {
        str += "*";
      }
      for (let j = 0; j < 7 - 4 * i + 2; j++) {
        str += " ";
      }
      for (let j = 0; j < 6 + 4 * i - 1; j++) {
        str += " ";
      }
    } else {
      for (let j = 0; j < 6 + 4 * i; j++) {
        str += "*";
      }
      for (let j = 0; j < 7 - 4 * i; j++) {
        str += " ";
      }
      for (let j = 0; j < 6 + 4 * i; j++) {
        str += "*";
      }
    }
  } else if (i < 6) {
    for (let j = 0; j < 29; j++) {
      str += "*";
    }
  } else {
    if (i == 13) {
      for (let j = 0; j < 2 * (i - 6); j++) {
        //打印空格
        str += " ";
      }
      str += "*";
    } else {
      for (let j = 0; j < 2 * (i - 6) + 1; j++) {
        //打印空格
        str += " ";
      }
      for (let j = 1; j < 28 - 4 * k; j++) {
        str += "*";
      }
      k++;
    }
  }
  str += "\n";
}
console.log(str);
