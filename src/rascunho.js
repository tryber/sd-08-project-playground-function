function decode(string) {
    let enCode = string
    for(let i in enCode){
        if(string[i] == "1"){
            enCode = enCode.replace("1","a")
        }
        else if(string[i] == "2"){
            enCode = enCode.replace("2","e")
        }
        else if(string[i] == "3"){
            enCode = enCode.replace("3","i")
        }
        else if(string[i] == "4"){
            enCode = enCode.replace("4","o")
        }
        else if(string[i] == "5"){
            enCode = enCode.replace("5","u")
        }
    } return enCode;
  }

 console.log(decode("12345"));
 console.log(decode("c1ch4rr4"));
 console.log(decode("h3 th2r2"));
 console.log(decode("m1m14"));
