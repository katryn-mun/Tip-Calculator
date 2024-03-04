// 1. Get whatever information is inputted into the box to be saved.
// 2. calculate the tip!!
// 3. find the element where the tip will go
// 4. insert the tip amount into the html
// 5. that's it

//locate tip form 
document.getElementById("tipForm").addEventListener('submit', function(event){
    event.preventDefault();

    let billTotal = document.getElementById("bill-total").value

    console.log(billTotal)
})

// addEventListener('h', function(){ 
//     //do stuff
// })