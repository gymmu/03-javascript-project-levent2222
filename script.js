// löscht alle e aus dem Text
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
  // gibt den Text in Grossbuchstaben an
export function aufgabe02(args){
    const input = args
    const result = [] 
    for (let i = 0; i < input.length; i++ ) {
      const currentElement = input[i].toUpperCase()
      result.push(currentElement)
    } 
    return result.join("")
  }
// gibt an wie viele e sich im Text befinden
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

  

// Zählt die Anzahl von Wörter im Text
  export function aufgabe04 (args) {
    const input = args
    const result = []
    let count = 1
    for (let i = 0; i < input.length; i++) {
      const currentElement = input [i]
      if (currentElement === " ") {
        count++
      }
}
    return count
  }
 //testet ob es ein Grossbuchstabe gibt
  export function aufgabe05 (args) {
    const input = args
 
    for (let i =0; i < input.length; i++) {
      const ascii = input[i].charCodeAt (0)
        // Ist ein Buchstabe 
      if (65 <= ascii && ascii <= 90) {
        return true
        }
        }
        return false
      }
 // Testet ob es ein Sonderzeichen gibt
      export function aufgabe06 (args) {
        const input = args
 
        for (let i=0;i <input.length; i++) {
          const ascii = input[i].charCodeAt (0)
       
          if (0 <= ascii&&ascii <= 31){
            return true
          }else if (33 <= ascii&&ascii <= 64){
            return true
            }else if (123<= ascii){
              return true
         
              } else if (91 <= ascii&&ascii <= 96)
              return true
             
              }
              return false }
             
 
       
              export function aufgabe07(args) {
                const input = args
                const result = []
               
                for (let i = 0; i < input.length; i++) {
                  const currentElement = input[i]
                  const currentElement1 = input[i+1]
                  const currentElement2 = input[i+2]
                  if (currentElement === "u" && currentElement1 === "n" && currentElement2 === "d"){
                   return true
                  }
              }
                return false
              }
 //macht aus e ein s
      export function aufgabe08(args) {
        const input = args
        const result = []
     
        for (let i = 0; i < input.length; i++) {  
          const currentElement = input[i]
          if (currentElement === "e") {
           result.push("3")
          }
       
         else {
          result.push(currentElement)
         }
        }
        return result.join("")
      }

// testet ob die Eingabe gneaz sechs Zeichen lang ist 
  export function aufgabe09(args){
    const input = args
    const result = [] 
    let len = 0
    for (let i = 0; i < input.length; i++ ) {
      len++
      }
    if (len === 6){
      return true 
    }
      return false
  }

//der ASCII code eines einzelnen Buchstaben wird angegeben
    export function aufgabe11 (args) {
      const input = args
    
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0)
      
      if (input.length === 1){
         return ascii
      }
      }
      return -1
  }
    
  // testet ob die Funktion ein korrekter Hexencode ist
    export function aufgabe10 (args) {
      const input = args
     
      if (input.length !== 7 ) return false
      if (input[0] !== "#") return false
     
      for (let i =1; i < input.length; i++) {
        const currentElement = input [i]
        const ascii = currentElement.charCodeAt (0)
       
        if (48 <= ascii && ascii <= 57) {
          //Ist eine Ziffer
     
        } else if (65 <= ascii && ascii <= 70) {
        //Ist A-F
      } else {
        return false
      }
      }
     
      return true
    }
  
  
  //such nach der Position des aller ersten e
    
    export function aufgabe12 (args) {
      const input = args
      const result = []
      
      
      for (let i = 0; i < input.length; i++) {
       
        const currentElement = input[i]
        
        if (currentElement === "e"){
          return i
        }
      }
      return -1
    }
    // es sucht nach dem letzten e in der Reihenfolge
    export function aufgabe13 (args) {
      const input = args
      const result = []
      
      
      for (let i = input.length; i > 1; i--) {
       
        const currentElement = input[i]
        
        if (currentElement === "e"){
          return i
        }
      }
      return -1
    }
//die Position des dritten e wird bestimmt
    export function aufgabe14 (args) {
      const input = args
      const result = []
      let Zahl = 0
      
      
      for (let i = 0; i < input.length; i++) {
       
        const currentElement = input[i]
        
        if (currentElement === "e"){
          Zahl++
        if (Zahl === 3){
          return i
        }
      }
      }
      return -1
    }
//es sucht nach dem ersten leerzeichen und liesst nur bsi dort ab
    export function aufgabe15 (args) {
      const input = args
      const result = []
      
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        if (currentElement === " ") {
          //bricht einen loop ab
          break
        } else {
          result.push(currentElement)
        }
      }
      
      return result.join("")

    }
    //trenne sie es in zwei listen die erste endet wenn dieses Zeichen kommt=$
    export function aufgabe16 (args) {
      const input = args
      const result = []
      let count = 0
      





      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
      if (count === 0 && currentElement === "$" && i+2 > input.length) {
      result.push("")
      count++
      }
      else if (currentElement === "$" && count === 0) {
      result.push(",")
      count++
      }
      else {
        result.push(currentElement)
      }
    }
    return result.join("")
    }
    export function aufgabe17 (args) {
      const input = args
      const result = []
      let countDot = 0
      let list1 = []
      let list2 = []
      let list3 = []
      
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        if (currentElement === ".") {
          countDot++
        }
        else if(countDot === 0) {
          list1.push(currentElement)
        }
        else if(countDot === 1) {
          list2.push(currentElement)
        }
        else if(countDot === 2) {
          list3.push(currentElement)
        }
          
      }
      return list1.join("")  + list2.join("") + list3.join("")
    }
    //Algorithmus zum Sortieren von Elementen
 
    export function aufgabe26 (args) {
      const input = args
      const list = input.split("")
    
      for (let i = 0; i < list.length - 1; i++) {
        //Diese Schleife läuft so lange, bis sie die gesamte Liste durchgleich der Länge der Eingabe ist.
        const currentElement = list[i]
        const currentElement1 = list[i + 1]
        if (currentElement.charCodeAt(0) > currentElement1.charCodeAt(0)) {
          const tmp = list[i + 1]
          list[i+1] = list[i]
          list[i] = tmp
          i = -1
        //Der Loop startet danch neu
        }
      }
      const result = list.join("")
      return result
    }
    export function bubbleSort (args) {
      
      return result.join("")
    }
    export function bubbleSort (args) {

      const text = args
      const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
      for (let i = 0; i < list.length - 1; i++) {
        const currentElement = list[i]
        const nextElement = list[i + 1]
        if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
          // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
          const tmp = list[i + 1]
          list[i + 1] = list[i]
          list[i] = tmp
          i = -1 // starte von vorne wenn etwas vertauscht wurde.
        }
      }
      const result = list.join("")
      return result
      }