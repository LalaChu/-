function selectSort(arr, targ){
  const args = arr;
  for(let i = 0; i < args.length - 1; i++){
    let min = i;
    for(let j = i + 1; j < args.length; j++){
      if(parseInt(args[min]) > parseInt(args[j])){
        min = j;
      }
    }
    if(min != i){
      let temp = args[min];
      args[min] = args[i];
      args[i] = temp;
    }
    printProcess(args, targ)
    // console.log('this is firt sort', args)
  }
  printProcess(args, targ)
  // console.log('this is result', args)
  return args
}
