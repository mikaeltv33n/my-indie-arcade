const track = document.querySelector(".carousel__track")
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel__button--right")
const prevButton = document.querySelector(".carousel__button--left")
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children)

const slideWidth = slides[0].getBoundingClientRect().width


// arrange the slides nex to each other 
// slides[0].style.left = slideWidth * 0 + "px" 
// slides[1].style.left = slideWidth * 1 + "px"
// slides[2].style.left = slideWidth * 2 + "px" 

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
}

slides.forEach(setSlidePosition)


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}


const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide")
    targetDot.classList.add("current-slide")

}


// when i click left, moves slide to the left 
prevButton.addEventListener("click", function (event) {
    const currentSlide = track.querySelector('.current-slide')
    let prevSlide = currentSlide.previousElementSibling
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1]
    }
    const currentDot = dotsNav.querySelector(".current-slide")
    let prevDot = currentDot.previousElementSibling
    if (!prevDot) {
        prevDot = dots[dots.length - 1]
    }
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
})




// when i click right, moves slide to the right
nextButton.addEventListener("click", function (event)  {
    const currentSlide = track.querySelector(".current-slide")
    let nextSlide = currentSlide.nextElementSibling
    if (!nextSlide) {
        nextSlide = slides[0]
    }
    const currentDot = dotsNav.querySelector(".current-slide")
    let nextDot = currentDot.nextElementSibling
    if (!nextDot) {
        nextDot = dots[0]
    }
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)

})



// when i click the nav indicators, move to that slide    
dotsNav.addEventListener("click", event => {
    // what indicator was clicked on 
    const targetDot = event.target.closest("button")

    if (!targetDot) return

    const currentSlide = track.querySelector(".current-slide")
    const currentDot = dotsNav.querySelector(".current-slide")
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)

})