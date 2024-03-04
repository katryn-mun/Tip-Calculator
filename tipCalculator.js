// Get whatever information is inputted into the box to be saved.
// calculate the tip!!
// find the element where the tip will go
// insert the tip amount into the html
// that's it



//locate tip form 
document.getElementById("tipForm").addEventListener('submit', function(event){
    event.preventDefault();

    let billTotal = document.getElementById("bill-total").value

    console.log(billTotal)
})


// addEventListener('h', function(){ 
//     //do stuff
// })