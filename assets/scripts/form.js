(function () {
    const FORM = document.querySelector(".footer__form")
    let success



    FORM.addEventListener("submit", submitHandler)


    function validate(element) {
        if (element.type === "submit"
            || element.type === "button"
            || element.type === "reset") {
            return
        }

        const FEEDBACK = element.nextElementSibling

        const makeFeedback = message => {
            FEEDBACK.innerText = message
            success = false
        }
        FEEDBACK.innerText = ""

       
        if (element.type === "text" && element.required) {
            if (element.value == "") {
                return makeFeedback("This has to be filled")
            } else {
                FEEDBACK.innerText = ""
            }
        }

        if (element.type === "email" && element.required) {
            if (element.value.includes("@")) {
                if (element.value.indexOf("@") === 0 || element.value.indexOf("@") === element.value.length - 1) {
                    return makeFeedback("Invalid email")
                } else {
                    FEEDBACK.innerText = ""
                }
            } else {
                return makeFeedback("Write a valid email")
            }
        }

        if (element.type === "number" && element.required) {
            if (element.value == "") {
                return makeFeedback("Write an avaiable phone no")
            } else {
                FEEDBACK.innerText = ""
            }

        }


        if (element.type === "number") {
            if (isTooLong(element.value)
                || isTooshort(element.value)
                || !hasLegalCharacters(element.value))
                return makeFeedback("write an avaiable phone no")


            // hvis nummeret er for kort 
            // hvis nummeret er for langt
            // eller nummeret hhar ulovlige tegn

        }
    } // validate slutter her

    function submitHandler(event) {
        event.preventDefault()
        success = true



        Array.from(event.target)
            .forEach(element => validate(element))

        if (success) FORM.submit()
    }


    const isTooLong = (string, maxlength = 20) => string.length > maxlength
    const isTooshort = (string, minlength = 3) => string.length < minlength
    const hasLegalCharacters = (string) => /^[0-9+#\*\s]+$/.test(string)
})()