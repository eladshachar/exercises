type phone = number | number[] | string | string[]

let print_numbers = function(num: phone): void{
   if(Array.isArray(num)){
      console.log('Array '+ num)
   }
   else if(typeof num === 'string'){
      console.log('String '+ num)
   }
   else if(typeof num === 'number'){
    console.log('number '+ num)
   }
   
}

print_numbers(["05489898989", "0547777777"])
print_numbers("0589797979")
print_numbers([58998989, 56897777])
print_numbers(8756565656)