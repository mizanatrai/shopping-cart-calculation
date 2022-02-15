function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber>0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber ('case',59, true);
    calculateTotal();
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber ('case', 59, false);
    calculateTotal();
})
// phone event handler
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber ('phone', 1219, true);
    calculateTotal();
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber ('phone', 1219, false);
    calculateTotal();
})

// calculate total tax and price
function calculateTotal(){
    const phoneTotalText = document.getElementById('phone-total').innerText;
    const phoneTotalAmount = parseFloat(phoneTotalText);
    const caseTotalText = document.getElementById('case-total').innerText;
    const caseTotalAmount = parseFloat(caseTotalText);
    const subTotal = caseTotalAmount + phoneTotalAmount;
    document.getElementById('sub-total').innerText = subTotal;
    const taxAmount = subTotal / 5;
    document.getElementById('tax-amount').innerText = taxAmount;
    const grandTotal = subTotal + taxAmount;
    document.getElementById('final-price').innerText = grandTotal;
}
