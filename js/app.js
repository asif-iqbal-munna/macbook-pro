// updating all costings [memory, storage, delivery]
function getMemoryCost(costOf,costing){
    const amountDisplay =  document.getElementById(costOf + '-cost');
    let totalAmount = amountDisplay.innerText;
    totalAmount = costing;
    amountDisplay.innerText = costing;
    return totalAmount;
}


// updating total cost of all costings in the function below
function totalAmount(priceOf){
    // debugger;
    const price = document.getElementById(priceOf + '-cost');
    const priceAmount = parseInt(price.innerText);
    return priceAmount;
}


// adding all the amount of costings
function getTotalPrice(){
    const totalPrice = totalAmount('best') + totalAmount('memory') + totalAmount('storage') + totalAmount('delivery');
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
    return totalPrice;
}


// updating total with or without promo code matching 
function getPromoCode(){
    const promoCodeField = document.getElementById('promo-code');
    const promoCodeValue = (promoCodeField.value).toLowerCase();
    const totalPrice = getTotalPrice();
    if(promoCodeValue === "stevekaku"){
        const discount = totalPrice / 5;
        const total = totalPrice - discount;
        document.getElementById('total').innerText = total;
    }
    promoCodeField.value = '';
}

// handling memory cost buttons
document.getElementById('memory-8gb').addEventListener('click', function(){
    getMemoryCost('memory',0);
    getTotalPrice();
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    // debugger;
    getMemoryCost('memory',180);
    getTotalPrice();
})

// handling storage cost buttons
document.getElementById('storage-256gb').addEventListener('click', function(){
    getMemoryCost('storage',0);
    getTotalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    getMemoryCost('storage',100);
    getTotalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    getMemoryCost('storage',180);
    getTotalPrice();
})


// handling delivery cost buttons
document.getElementById('free-delivery').addEventListener('click', function(){
    getMemoryCost('delivery',0);
    getTotalPrice();
})
document.getElementById('charged-delivery').addEventListener('click', function(){
    getMemoryCost('delivery',20);
    getTotalPrice();
})

document.getElementById('PC-apply-btn').addEventListener('click', function(){
    getPromoCode();
})
