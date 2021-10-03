// Display data returned from an api

document.querySelector('button').addEventListener('click', searchButton)


function searchButton(){
const food = document.querySelector('input').value

fetch(`https://api.spoonacular.com/food/products/search?query=${food}&apiKey=38da5847c627442d8adb66091f1d3e58`)
.then(res => res.json())
.then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.products[0].title
    document.querySelector('img').src = data.products[0].image
    
})
.catch(err => {
    console.log(`error ${err}`)
})

// let products = data.products[0].title
}