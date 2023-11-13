let prize = document.querySelector("input")

prize.addEventListener("input", function(){
        document.querySelector("h2").innerText = prize.value
    }
)

setInterval(function(){
    let red = Math.floor(Math.random()*255)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)

    document.body.style.background = `rgb(${red},${green},${blue})`
},1500)