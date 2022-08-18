/*const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        this.hungry = false;
        alert('Im no longer hungry!')
      }
    }
  }  
  
  person.feed()*/

  /*const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);*/

  /*const pumpFuel = function (airplane) {
    this.fuel += 1;
  };
  
  const airplane = {
    fuel: 0,
    fly: function () {
      if (this.fuel < 2) {
        return 'on the ground!';
      }
      else {
        return 'flying!';
      }
    }
  };
  
  console.log('The plane should not be able to fly (yet): ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('The plane should STILL not be able to fly: ' + airplane.fly());
  
  pumpFuel(airplane);
  console.log('Take off! ' + airplane.fly()); */

  /*const tipJar = {
    coinCount: 20,
    tip: function () {
      this.coinCount += 1;
    },

    stealCoins: function(num){
        this.coinCount -= num
    }
  };
  
  tipJar.tip();
  console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(3);
  console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);
  
  tipJar.stealCoins(10);
  console.log('Tip jar should have 8 coins: ' + tipJar.coinCount); */

  /*const revealSecret = function (person) {
    return person.secret;
  };
  
  const shoutIt = function (person, func) {
    const result = func(person);
    alert(person.name + " said: "+ result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I dont have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);*/

  /*const coffeeShop = {
    beans: 40,
    money: 100,
  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 20},
      americano:  {beanRequirement: 5, price: 10},
      doubleShot: {beanRequirement: 15, price: 30},
      frenchPress: {beanRequirement: 12, price: 24}
    },
    
    buyBeans: function(numBeans){
        let cost = numBeans*2;

        if(cost > this.money){
            alert("not enough money")
        }
        else{
            money -= cost;
            numBeans += numBeans
        }
    }   

    makeDrink: function (drinkType) {
      // TODO: Finish this method
      if(drinkType in this.drinkRequirements){
         let value = this.drinkRequirements[drinkType];
         if(value > this.beans){
            alert("we're out of beans")
         }
         else{
            this.beans -= value ;
         }
          

      }
      else{
        alert("sorry, we don't make");
      }
    }

    buyDrink: function(drinkType){

    }
  }
  
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"*/ 

