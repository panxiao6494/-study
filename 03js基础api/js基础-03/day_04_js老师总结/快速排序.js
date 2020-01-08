// https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/1.bubbleSort.md
// 自动生成一个给定长度的数组
// 理解快速排序的核心理念

var tmpArr = [];
for(var i =0;i<10000;i++){
  tmpArr.push(Math.floor(Math.random()*10001)) //随机生成0-1000的随机数
}

function quickSort(arr){
  if(arr.length <= 1){
    return arr
  }
  
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex,1)[0];
  var left = [];
  var right = [];

  for(var i =0;i<arr.length; i++){
    if(arr[i] <= pivot){
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}

console.time("快速排序时间");
quickSort(tmpArr);
console.timeEnd("快速排序时间");