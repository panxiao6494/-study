setInterval(function() {
  var dCurDate = new Date();
  var curr_date =
    dCurDate.getFullYear() +
    "年" +
    (dCurDate.getMonth() + 1) +
    "月" +
    dCurDate.getDate() +
    "日 " +
    dCurDate.getHours() +
    ":" +
    dCurDate.getMinutes() +
    ":" +
    dCurDate.getSeconds();
  console.log(curr_date);
}, 1000);
