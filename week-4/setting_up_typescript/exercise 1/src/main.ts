function sum(arr: number[]): number{
    let sum: number = 0
    
    arr.forEach(a => sum += a)

    return sum
}

let arr: number[] = [2,3,4]

let res: number = sum(arr)

console.log(res)

function isEven(num: number): boolean{
    if(num%2 == 0){
        return true
    }
    else{
        return false
    }
}

let num: number = 5

console.log(isEven(num))


