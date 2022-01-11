console.log('Client side JavaScript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const resultMessage = document.querySelector('#resultMessage')
const forecastMessage = document.querySelector('#forecastMessage')

resultMessage.textContent = ''
forecastMessage.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                resultMessage.textContent = data.error
            } else {
                resultMessage.textContent = data.location
                forecastMessage.textContent = data.forecast
            }
        })
    })
})
