const uFunction = (n: number):number[] => {
  
  return [
    2 * n +1,
    3 * n +1
  ];
}

const existNumber = (list: number[], value: number): boolean => {

  for(let i = 0; i < list.length;i++) {
    if(list[i]==value) return true
  }

  return false
}

export function dblLinear(n: number): number {
  
  let list: number[] = [1];
  let pila: number[] = [1];

  let i = 0;
  while( i < n ){

    const valueIdx = pila.shift();
    const numbersLineal: number[] = uFunction(valueIdx!);

    if(!existNumber(list, numbersLineal[0])){
      list.push(numbersLineal[0])
    }

    if(!existNumber(list, numbersLineal[1])){
      list.push(numbersLineal[1])
    }

    list = list.sort((a,b) => a > b ? 1 : -1)

    pila.push(...numbersLineal);
    pila = pila.sort((a,b) => a > b ? 1 : -1)

    i++;
  }

  return list[n];
}

//console.log(dblLinear(471))

