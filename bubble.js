function bubbleSort(arr, targ){
  const args = arr;
  for(let i = 0; i < args.length; i++){
    for(let j = 0; j < args.length - i; j++){
      if(parseInt(args[j]) > parseInt(args[j+1])){
        let temp = args[j];
        args[j] = args[j+1];
        args[j+1] = temp;
      }
    }
    printProcess(args, targ)
    // console.log('this is firt sort', args)
  }
  printProcess(args, targ)
  // console.log('this is result', args)
  return args
}
