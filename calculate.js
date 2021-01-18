//Grabing the element by Id and const means form will not change
const form = document.getElementById('calculator');



//we are passing the event in this function and and manipulating that event in this function 
form.onsubmit = function(event){
	event.preventDefault();//prevent it refreshing the page
	
    //Grabing the element by id of bill, percent , people,Tip,Total_per_person
	let bill =document.getElementById('bill');
	let tip =document.getElementById('percent');
	let noOfPeople =document.getElementById('people');
    let tipPerPerson = document.getElementById('Tip');
    let totalPerCustomer = document.getElementById('Total_per_person');


    
    //parse the bill value into float
    let cost = parseFloat(bill.value)
    //parse the noOfPeople in int
    let customers = parseInt(noOfPeople.value);
    
    let percentage = 0;
    if(tip.value !==''){
        percentage = parseInt(tip.value);
    }
   
    //calling the calculatePercentageAmount function and assigning its return value in percentageAmount
    let percentageAmount = calculatePercentageAmount(cost,percentage);

    //calling the calculateTotalValue which will calculate total value of bill and assign it in Total value
    let totalValue = calculateTotalValue(cost,percentageAmount);

    //calling the calculateTipPerPerson function which will calculate Tip per person and assign it
    let tip_Per_Person = calculateTipPerPerson(percentageAmount,customers);  
    //Now we are changing the value of tipPerPerson as per calculated value
    tipPerPerson.value =tip_Per_Person;
    
    //calling the calculatePerCustomer function which will calculate amount per customer and return it
    let PerCustomer = calculatePerCustomer(totalValue,customers);
    //Changing the value of totalPerCustomer value to calculated amount    
    totalPerCustomer.value = PerCustomer;


	return false;
}



//Calculating the Total Tip 
function calculatePercentageAmount(cost,percentage){
    return Math.round((cost/100)*percentage);
}

//This below code calculate the Total bill including Tip
function calculateTotalValue(cost , percentageAmount){
    return Math.round(cost+percentageAmount);
}


//This function split the Bill for the customer
function calculatePerCustomer(totalValue,customers){
    return (totalValue/customers);
}

//This function calculate the Tip per person
function calculateTipPerPerson(percentageAmount,customers){
    return percentageAmount/customers;
}

//This function add the plus minus counter in button 
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});
