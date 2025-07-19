
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')

daily.addEventListener('click', dailyDisplay)
weekly.addEventListener('click', weeklyDisplay)
monthly.addEventListener('click', monthlyDisplay)


function dailyDisplay() {
    
    previous.innerHTML = 100
    current.innerHTML = 10
    // alert('HELLO>>>>')
}
function weeklyDisplay() {

    previous.innerHTML = 200
current.innerHTML = 20
    // alert('HELLO_11111')
}
function monthlyDisplay() {

    previous.innerHTML = 300
current.innerHTML = 30
    // alert('HELLO_22222')
}