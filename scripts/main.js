
const daily = document.querySelector('.daily')
const weekly = document.querySelector('.weekly')
const monthly = document.querySelector('.monthly')
const current = document.querySelectorAll('.current')
const previous = document.querySelectorAll('.previous')

daily.addEventListener('click', dailyDisplay)
weekly.addEventListener('click', weeklyDisplay)
monthly.addEventListener('click', monthlyDisplay)

let q = []

fetch('../data.json')
    .then((response) => response.json())
    .then((data) => {
        q = data;
    })

    .catch((error) => console.error("Error loading JSON:", error));

function timeOver(a, b) {
    current.forEach((node, index) => {
        if (a[index] !== undefined) {
            node.innerHTML = a[index];
        }
    });

    previous.forEach((node, index) => {
        if (b[index] !== undefined) {
            node.innerHTML = b[index];
        }
    });
}

function dailyDisplay() {

    const dailyCurrents = q.map(item => item.timeframes.daily.current);
    const dailyPrevious = q.map(item => item.timeframes.daily.previous);

    timeOver(dailyCurrents, dailyPrevious)
}

function weeklyDisplay() {

    const weeklyCurrents = q.map(item => item.timeframes.weekly.current);
    const weeklyPrevious = q.map(item => item.timeframes.weekly.previous);

    timeOver(weeklyCurrents, weeklyPrevious)
}

function monthlyDisplay() {

    const monthlyCurrents = q.map(item => item.timeframes.monthly.current);
    const monthlyPrevious = q.map(item => item.timeframes.monthly.previous);

    timeOver(monthlyCurrents, monthlyPrevious)

}
