// 1. Get whatever information is inputted into the box to be saved.
// 2. calculate the tip!!    <------------------------
// 3. find the element where the tip will go
// 4. insert the tip amount into the html
// 5. that's it

//locate tip form 
document.getElementById("tipForm").addEventListener('submit', function(event){
    event.preventDefault();
    //CONSTANTS
    const BILL_TOTAL = parseFloat(document.getElementById("bill-total").value)
    const PERCENTAGE = 0.15
    const TIP_ELEMENT= document.getElementById("tip")
    const TIP = BILL_TOTAL * PERCENTAGE
    const GRAND_TOTAL_ELEMENT = document.getElementById("grand-total")
    const GRAND_TOTAL= BILL_TOTAL + TIP

    //VARIABLES
    let grandTotal= 0.00

    TIP_ELEMENT.textContent = TIP.toFixed(2)
    GRAND_TOTAL_ELEMENT.textContent=GRAND_TOTAL.toFixed(2)

})

// addEventListener('h', function(){ 
//     //do stuff
// })