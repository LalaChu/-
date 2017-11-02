function insertSort(arr, targ){
  const args = arr;
  for(let i = 1; i < args.length; i++){
    let get = args[i];
    let j = i - 1;
    for(; j >= 0 && parseInt(args[j]) > parseInt(get); j--){
      args[j+1] = args[j];
    }
    args[j+1] = get;
    printProcess(args, targ)
    // console.log('this is firt sort', args)
  }
  printProcess(args, targ)
  // console.log('this is result', args)
  return args
}
