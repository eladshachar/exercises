let employeesArr = [
    { name : "Joey" , id: 1 , age: 26},
    { name : "Lily" , id: null , age: 24},
    { name : "Alice" , id: 7 , age: null},
    { name : "Sam" , id: 8 , age: 24},
    { name : "Ray" , id: null , age: null}
    ]

for(let employee of employeesArr){

    const id = employee.id ?? 0
    const age = employee.age ?? 0

    if(id==0 || age==0){
        console.log(employee.name)
    }
}