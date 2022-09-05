let concat = function(text: string | string[], print: boolean | number){
   if(print === 1 || print === true){
      let str: string = ""

      if(Array.isArray(text)){
        text.forEach(t => str += t)
      }
      else{
        str = text
      }

      console.log(str)
   }
}

concat("gigi", 1)
concat(["haha", "dudu"], true)
concat("fofo", 0)