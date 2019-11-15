

var count = 10;
var m = document.getElementsByClassName('message')
var myVar = setInterval(myCounter, 500)

function myCounter() {

    if (count != -1) {
        document.getElementById('count').innerHTML = `${count--}`
    }

    else {
        myStopFunction()
    }

    function myStopFunction() {
        clearInterval(myVar);
        document.getElementById('message').style.visibility = 'hidden'
    }
}
