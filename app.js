$('#currentDay').html(moment().format('dddd MMMM Do, YYYY'))

let currentTime = parseInt(moment().format('HH'))
//So this should get me current hour in military time. if anywhere between 8PM-8:59PM it'll give me 20.
console.log(currentTime)

// //This should grab items from local storage
// $('#9').val(localStorage.getItem('9'))
// $('#10').val(localStorage.getItem('10'))
// $('#11').val(localStorage.getItem('11'))
// $('#12').val(localStorage.getItem('12'))
// $('#13').val(localStorage.getItem('13'))
// $('#14').val(localStorage.getItem('14'))
// $('#15').val(localStorage.getItem('15'))
// $('#16').val(localStorage.getItem('16'))
// $('#17').val(localStorage.getItem('17'))

