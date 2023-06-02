let myDocument = document.documentElement
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

        button.textContent = " Exit Fullscreen"
    }

    else{
        if(document.exitFullscreen){
            document.exitFullscreen()
        }
        else if(document.msexitFullscreen){
            document.msexitFullscreen()
        }

        else if (document.mozexitFullscreen){
            document.mozexitFullscreen()
        }

        else if (document.webkitexitFullscreen){
            document.webkitexitFullscreen()
        }


        button.textContent = "Go Fullscreen"
    }
})