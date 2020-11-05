function generatePhoneNumber(arrayNumbers) {
    let count = [];
    let ddd = arrayNumbers.slice(0,2).join("");
        let first = arrayNumbers.slice(2,7).join("");
        let second = arrayNumbers.slice(7,11).join("");
    for(let i = 0; i < arrayNumbers.length; i+=1){
        count.push(arrayNumbers[i])
    
        let repeat = 0;
        for(let index = 0; index < arrayNumbers.length; index +=1){
            if(count[i] === arrayNumbers[index]){
                repeat +=1;
            }     
        }
  
        
    
        if(arrayNumbers.length != 11){
            return 'Array com tamanho incorreto';
        }else if(arrayNumbers[i] < 0 || arrayNumbers >9){
            return 'Array com tamanho incorreto.'
        }else if(repeat >= 3){
            return 'não é possível gerar um número de telefone com esses valores';
        }
            
   }
        
        if(arrayNumbers == ""){
        return 'Array com tamanho incorreto'
        }else{
        let result = `(${ddd}) ${first}-${second}`
        return result;
        }
}
  

  console.log(generatePhoneNumber([]));