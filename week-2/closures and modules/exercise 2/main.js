const Bank = function(){
    const money = 500

    const deposit(amount){
        money += amount
    }

    showBalance(){
        console.log(money)
    }

    
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950