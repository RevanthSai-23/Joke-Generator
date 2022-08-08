const generateJoke = document.getElementById("joke")
const wrapper = document.getElementById("wrapper")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single"
const btn = document.getElementById("generate")

let getJoke = () => {
    fetch(url).then(data => data.json()).then(item => {
        generateJoke.textContent = `${item.joke}`
    })
}
btn.addEventListener("click", getJoke)

getJoke()