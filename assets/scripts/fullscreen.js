let myDocument = document.querySelector("#game-fullscreen")
let button = document.querySelector("#btn")

button.addEventListener("click", function () {
    if(button.textContent == "Go Fullscreen"){
        if(myDocument.requestFullscrren){
            myDocument.requestFullscrren()
        }
        else if(myDocument.msRequestFullscreen){
            myDocument.msRequestFullscreen()
        }
        else if(myDocument.mozRequestFullscreen){
            myDocument.mozRequestFullscreen()
        }
        else if(myDocument.webkitRequestFullscreen){
            myDocument.webkitRequestFullscreen()
        }
        
        
    }
    
    else{
        
        button.textContent = "Go Fullscreen"
    }
})