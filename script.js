export function aufgabe01(args) {
  const input = args
  const result = [] 
  for (let i = 0; i < input.length; i ++ ) {
    const currentElement = input [i]  
  if (currentElement === "e" ||currentElement === "E" )  {  
  }
  
  else {
    result.push (currentElement)
  }
  }
  return result.join("")
  }
  
export function aufgabe02(args){
    const input = args
    const result = [] 
    for (let i = 0; i < input.length; i++ ) {
      const currentElement = input[i].toUpperCase()
      result.push(currentElement)
    } 
    return result.join("")
  }

export function aufgabe03(args){
    const input = args
    const result = [] 
    let countE = 0
    for (let i = 0; i < input.length; i++ ) {
      const currentElement = input[i]
      if (currentElement === "e" ||currentElement === "E" )  {  
        countE++
      }
     {
      
    }
    } 
    return countE
  }