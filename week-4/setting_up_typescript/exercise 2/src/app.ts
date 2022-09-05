class Student{
    sName: string
    age: number
    grades: number[]

    constructor(n: string, a: number, g: number[]){
        this.sName = n
        this.age = a
        this.grades = g
    }

    addGrade = function(this: Student ,num: number){
       this.grades.push(num)
    }

    getGradeAvg = function(this: Student): number{
        let sum: number = 0
        this.grades.forEach(g => sum += g)
        return sum/this.grades.length
    }
}

let yoram = new Student('Yoram', 24, [])
yoram.addGrade(90)
yoram.addGrade(80)

console.log(yoram.getGradeAvg())
