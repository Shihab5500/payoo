

const validPin = 1234

// add money feature

document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    console.log("add money button click");

    // sob gulo value ke id dia add korar jonno

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("add-pin").value)
    console.log(bank,accountNumber,amount,pin);
    
    // available-balance er sathe add balance add korar jonno

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    console.log(availableBalance);

    if(accountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    
    if(pin !== validPin){
        alert("Please provide valid pin")
        return;
    }

    const totalAvailableBalance = amount+availableBalance
    document.getElementById("available-balance").innerText = totalAvailableBalance
    
})

// cash out money feature

const cashPin = 1234

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()

    const withdrawAccountNumber = document.getElementById("agent-number").value
    
    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText) 

    const cashOutPin = parseInt(document.getElementById("cash-Pin").value)

    const totalNewAvailableBalance = availableBalance - amount

    if(withdrawAccountNumber.length < 11){
        alert("Provide valid number")
        return;
    }

    if(cashOutPin !== cashPin){
        alert("Provide Valid Pin")
        return;
    }

    console.log(totalNewAvailableBalance);
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    
    
})



// transfer features


const transPin = 1234

document.getElementById("transfer-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const transferAccountNumber = document.getElementById("transfer-number").value
    const amount = parseInt(document.getElementById("transfer-amount").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    const transferPin = parseInt(document.getElementById("transfer-Pin").value)

    const totalNewAvailableBalance = availableBalance - amount

    if(transferAccountNumber.length < 11){
        alert("Provide valid number")
        return;
    }
    
    if(transPin !== transferPin){
        alert("Provide Valid Pin")
        return;
    }

    console.log(totalNewAvailableBalance);
    document.getElementById("available-balance").innerText = totalNewAvailableBalance
    
})


// get bonous

const cupon = 12345

document.getElementById("bonous-btn").addEventListener("click",function(e){
    e.preventDefault()

    const cuponNumber = parseInt(document.getElementById("cupon-number").value)

    console.log(cuponNumber);

})



// pay bill

const payPin = 1234


document.getElementById("pay-add-btn").addEventListener("click",function(e){
    e.preventDefault()

    console.log("add pay bill click");

    const payBill = document.getElementById("pay").value
    const accountNumber = document.getElementById("pay-account-number").value
    const addPayAmount = parseInt(document.getElementById("pay-add-amount").value)
    const pin = parseInt(document.getElementById("pay-add-pin").value)

    console.log(payBill,accountNumber,addPayAmount,pin);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)
    console.log(availableBalance);


    if(accountNumber.length <11){
        alert("Please provide valid account number")
        return;
    }
    if(pin !== payPin){
        alert("Please provide valid pin")
        return;
    }

    
    const totalAvailableBalance = availableBalance - addPayAmount
    document.getElementById("available-balance").innerText = totalAvailableBalance
    
})


// transaction 




// latest payment






    
    

// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("get-bonous-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-parent").style.display = "none"
    document.getElementById("latest-payment-parent").style.display = "none"
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("get-bonous-parent").style.display = "none" 
    document.getElementById("transaction-parent").style.display = "none"
    document.getElementById("latest-payment-parent").style.display = "none"
})

document.getElementById("transfer-button").addEventListener("click",function(){

    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"    
    document.getElementById("transfer-parent").style.display = "block"
    document.getElementById("get-bonous-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-parent").style.display = "none" 
    document.getElementById("latest-payment-parent").style.display = "none"   

})

document.getElementById("get-bonous-button").addEventListener("click",function(){

    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"    
    document.getElementById("transfer-parent").style.display = "none" 
    document.getElementById("get-bonous-parent").style.display = "block" 
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-parent").style.display = "none"
    document.getElementById("latest-payment-parent").style.display = "none"
})

document.getElementById("pay-bills-button").addEventListener("click",function(){

    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"    
    document.getElementById("transfer-parent").style.display = "none" 
    document.getElementById("get-bonous-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "block"
    document.getElementById("transaction-parent").style.display = "none"
    document.getElementById("latest-payment-parent").style.display = "none"
})


document.getElementById("transaction-button").addEventListener("click",function(){

    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"    
    document.getElementById("transfer-parent").style.display = "none" 
    document.getElementById("get-bonous-parent").style.display = "none"
    document.getElementById("pay-bill-parent").style.display = "none"
    document.getElementById("transaction-parent").style.display = "block"    
    document.getElementById("latest-payment-parent").style.display = "none"    

})



 