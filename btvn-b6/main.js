// bai1
arrInt = [1, 3, 9, 55, 99, 66, 8, 0, -9];
function findMaxMin(n) {
  if (Array.isArray(n)) {
    var max, min, positionMax, positionMin;
    max = n[0];
    min = n[0];
    for (var i = 0; i < n.length; i++) {
      if (max <= n[i]) {
        max = n[i];
        positionMax = i;
      }
      if (min >= n[i]) {
        min = n[i];
        positionMin = i;
      }
    }

    console.log(`Số lớn nhất ở vị trí ${positionMax} là ${max}`);
    console.log(`Số nhỏ nhất ở vị trí ${positionMin} là ${min}`);
  } else {
    console.log("Nhập mảng");
  }
}
findMaxMin(arrInt);

// bai2
console.log(`bai 2`);

var arrInt = [2, 11, 7, 3, 9, 55, 99, 66, 1, 84];
var arrPrime = [];
var result = 0;
var flag = true;

function caculator(n) {
  if (Array.isArray(n)) {
    for (var i = 0; i < n.length; i++) {
      if (n[i] < 2) {
        flag = false;
      } else {
        for (var j = 2; j < n[i]; j++) {
          if (n[i] % j === 0) {
            flag = false;
            break;
          }
          flag = true;
        }
      }

      if (flag === true) {
        arrPrime.push(n[i]);
      }
    }
    if (arrPrime.length === 0) {
      return "Không có số nguyên tố";
    } else {
      for (var i = 0; i < arrPrime.length; i++) {
        result += arrPrime[i];
      }

      return `Trung bình các số nguyên tố trong mảng là ${
        result / arrPrime.length
      }`;
    }
  } else {
    return "Dữ liệu đầu vào phải là mảng";
  }
}

console.log(caculator(arrInt));

// bai3
console.log(`bài 3`);
function filterDuplicates(array) {
  var result = [];
  var visited = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (!visited[element]) {
      result.push(element);
      visited[element] = true;
    }
  }

  return result;
}

var arr = [1, 10, 9, 2, 8, 1, 10, 9, 6];
var filteredArr = filterDuplicates(arr);
console.log(filteredArr);

// bai 4
console.log(`bai 4`);

var arr4 = [0, 14, 7, 3, -4, 9];
var num = 2;
var insertIndex = 4;

var sortArr = function (arr) {
  return arr.sort((a, b) => a - b);
};

var insertNum = function (arr, num, index) {
  if (index === 0) {
    arr.unshift(num);
  } else if (index >= arr.length) {
    arr.push(num);
  } else {
    var leftSliceArr = arr.slice(0, index);
    var rightSliceArr = arr.slice(index);
    arr = [];
    arr = arr.concat(leftSliceArr, num, rightSliceArr);
  }
  return sortArr(arr);
};

console.log(arr4);
console.log(insertNum(arr4, num, insertIndex));
