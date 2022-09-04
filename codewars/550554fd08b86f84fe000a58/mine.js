function inArray(array1, array2){

  return array1.filter(item => {
    let has = false;

    for(let i = 0; i < array2.length; i++) {
      if(array2[i].indexOf(item) !== -1) has = true;
    }

    return has;
  }).sort();
}