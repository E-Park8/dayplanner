$(document).ready(function (){
$("#currentDay").html(moment().format("[Today is] dddd MMMM Do YYYY"))
$("#timeNow").html(moment().format("[Accessed at] LT [PST]"))


let currentTime = parseInt(moment().format("H"))
//So this should get me current hour in military time. if anywhere between 8PM-8:59PM it'll give me 20.
console.log(currentTime)


//Comparing current time with the time blocks according to military time. gives appropriate class depending on the time and then color codes.
$(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id"))
     if(timeBlock === currentTime){
         $(this).addClass("present")
     } else if (timeBlock > currentTime) {
         $(this).addClass("future")
     } else {
         $(this).addClass("past")
     }

 })
//  Giving the save buttons a click function. using siblings and parents allows to grab appropriate divs
$(".saveBtn").click(function () {
    let task = $(this).siblings(".description").val()
    let scheduledTime = $(this).parents().attr("id")
    
    localStorage.setItem(scheduledTime, task)
})

//This should grab items from local storage
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

})
