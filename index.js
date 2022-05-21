let number = Math.floor(Math.random() * 100)
console.log(number)
let button = document.querySelector("button")
let counter = 5
let firstinput = document.querySelector("input")
let test = ""
let h2 = document.querySelector("h2")
let span = document.querySelector("span")
let img = document.querySelector("img")
function assignvalue(){
    test = firstinput.value
    firstinput.value=""
    test = Number(test)
    if ((counter == 1) && (test != number) ){
        h2.innerHTML =  "You lost , try again!" 
        img.setAttribute("src","gameover.png")
        span.innerHTML = 0
    }else if
       ( (counter >= 0) && (test == number)){
        h2.innerHTML = "Congratulations , you won!" 
        img.setAttribute("src","winimg.png")  
       }
    else{
        if(test>number){
            img.setAttribute("src","godownimg.png")
            h2.innerHTML = "GO DOWN!" 
            h2.style.color = "#50D890" 
            counter--
            span.innerHTML = counter
         
        }else{img.setAttribute("src","goupimg.png")
             h2.innerHTML = "GO UP!"
             h2.style.color = "#50D890"
             counter--
             span.innerHTML = counter
    }
    }

}
button.addEventListener("click", assignvalue )
button.addEventListener("click", function(event){
    event.preventDefault()
  })
