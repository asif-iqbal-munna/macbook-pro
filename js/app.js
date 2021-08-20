// updating all costings [memory, storage, delivery]
function getMemoryCost(costOf,costing){
    const amountDisplay =  document.getElementById(costOf + '-cost');
    let totalAmount = amountDisplay.innerText;
    totalAmount = costing;
    amountDisplay.innerText = costing;
    return totalAmount;
}


// handling memory cost buttons
document.getElementById('memory-8gb').addEventListener('click', function(){
    getMemoryCost('memory',0);

})
document.getElementById('memory-16gb').addEventListener('click', function(){
    // debugger;
    getMemoryCost('memory',180);
})

// handling storage cost buttons
document.getElementById('storage-256gb').addEventListener('click', function(){
    getMemoryCost('storage',0);
})
document.getElementById('storage-512gb').addEventListener('click', function(){
    getMemoryCost('storage',100);
})
document.getElementById('storage-1tb').addEventListener('click', function(){
    getMemoryCost('storage',180);
})


// handling delivery cost buttons
document.getElementById('free-delivery').addEventListener('click', function(){
    getMemoryCost('delivery',0);
})
document.getElementById('charged-delivery').addEventListener('click', function(){
    getMemoryCost('delivery',20);
})