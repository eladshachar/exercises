let validator = require('validator')
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"

console.log(validator.isEmail('shoobert@dylan'))
console.log(validator.isMobilePhone('786-329-9958', 'en-US'))
console.log(validator.blacklist(text, blacklist))

const { faker } = require('@faker-js/faker');

const makeHuman = function(number){
    let humans = []

    for(let i =0; i<number; i++){
        let human = {
            name: "",
            picture: "",
            company: ""
        }

        human.name = faker.name.firstName()
        human.picture = faker.image.avatar()
        human.company = faker.company.name()

        humans.push(human)

    }

    return humans
}

console.log(makeHuman(3))
