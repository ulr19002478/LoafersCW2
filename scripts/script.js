var orderModal = new bootstrap.Modal(document.getElementById("order-modal"));
document.getElementById("order-btn").addEventListener("click", function(){
    document.getElementById("order-text").innerHTML = breadChoice.value;
    document.getElementById("order-text1").innerHTML = op1Choice.value;
    document.getElementById("order-text2").innerHTML = op2Choice.value;
    document.getElementById("order-text3").innerHTML = op3Choice.value;
    document.getElementById("order-text4").innerHTML = op4Choice.value;

    
    orderModal.show();

});


var breadChoice = document.getElementById("bread");
var value=breadChoice.options[breadChoice.selectedIndex].value;
var text=breadChoice.options[breadChoice.selectedIndex].text;

var op1Choice = document.getElementById("ingre1");
var value=op1Choice.options[op1Choice.selectedIndex].value;
var text=op1Choice.options[op1Choice.selectedIndex].text;

var op2Choice = document.getElementById("ingre2");
var value=op2Choice.options[op2Choice.selectedIndex].value;
var text=op2Choice.options[op2Choice.selectedIndex].text;

var op3Choice = document.getElementById("ingre3");
var value=op3Choice.options[op3Choice.selectedIndex].value;
var text=op3Choice.options[op3Choice.selectedIndex].text;

var op4Choice = document.getElementById("ingre4");
var value=op4Choice.options[op4Choice.selectedIndex].value;
var text=op4Choice.options[op4Choice.selectedIndex].text;



var save = document.getElementById("save-btn")
save.addEventListener("click", function(e){
    console.log("why")
    window.location.href="sandwich.html";
})







