// updating all costings [memory, storage, delivery]
function getCostings(costOf,costing){
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
    const cost = 0; // for memory cost of $0
    getCostings('memory',cost);
    getTotalPrice();
})
document.getElementById('memory-16gb').addEventListener('click', function(){
    // debugger;
    const cost = 180; // for memory cost of $180
    getCostings('memory',cost);
    getTotalPrice();
})

// handling storage cost buttons
document.getElementById('storage-256gb').addEventListener('click', function(){
    const cost = 0; // for storage cost of $0
    getCostings('storage',cost);
    getTotalPrice();
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    const cost = 100; // for storage cost of $100
    getCostings('storage',cost);
    getTotalPrice();
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    const cost = 180; // for storage cost of $180
    getCostings('storage',cost);
    getTotalPrice();
})


// handling delivery cost buttons
document.getElementById('free-delivery').addEventListener('click', function(){
    const cost = 0; // for free delivery
    getCostings('delivery',cost);
    getTotalPrice();
})
document.getElementById('charged-delivery').addEventListener('click', function(){
    const cost = 20; // for delivery cost of $20
    getCostings('delivery',cost);
    getTotalPrice();
})

// handling promo code button
document.getElementById('PC-apply-btn').addEventListener('click', function(){
    getPromoCode();
})
