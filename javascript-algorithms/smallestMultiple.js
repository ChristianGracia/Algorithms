function smallestCommons(arr) {

  var tempArr = [];


  if(arr[0] > arr[1]){
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  for (var i = arr[0]; i <= arr[1]; i++ ){
    tempArr.push(i);

  }

  var counter = arr[1];

  while(true){
    counter++;
    let check = true;

    for (var j = 0; j < tempArr.length; j++){
      if (counter % tempArr[j] != 0){
        check = false;
      }
      if (check) {
        console.log(counter);
        return counter;
      }
      
    }
  }

  return arr;
}


smallestCommons([1,5]);
