function quickSort(arr, targ){
  const args = arr;
  sortPart(args, 0, args.length - 1)
  printProcess(args, targ)
  // console.log('this is result', args)
  return args
}


function sortPart(arr, left, right){
  const targ = document.getElementById('quick')
  printProcess(arr, targ)
  let m_left = left, m_right = right;
  const base = arr[m_left];
  if(m_left >= m_right){
    return;
  }
  while(m_left != m_right){
    while( parseInt(arr[m_right]) >= parseInt(base) && parseInt(m_right) > parseInt(m_left)){
      // console.log('this is while')
      m_right--;
    }
    if( parseInt(m_right) > parseInt(m_left)){
      arr[m_left] = arr[m_right];
    }
    while( parseInt(arr[m_left]) <= parseInt(base) &&  parseInt(m_left) < parseInt(m_right)){
      m_left++;
    }
    if( parseInt(m_left) < parseInt(m_right)){
      arr[m_right] = arr[m_left]
    }
  }

  arr[m_left] = base;
  sortPart(arr, left, m_left - 1)
  sortPart(arr, m_left + 1, right)
  
}
