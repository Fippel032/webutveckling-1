console.log("lksdföajsdklfj")

let text = document.getElementById("text")
let isClicked = false

function Hej() {
    text.innerHTML = "wow"
    if (isClicked == true) {
        isClicked = false
        text.innerHTML = "Nej"
    } else {
        isClicked = true
        text.innerHTML = "Ja"

    }

}

function createMail() {
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")

    text.innerHTML = firstName.value + "." + lastName.value + randomDomain();
}


function randomDomain() {
    let i = Math.floor(Math.random() * 8);

    switch (i) {
        case 0:
            return "@gmail.com";

        case 1:
            return "@icloud.com";

        case 2:
            return "@hotmail.com";

        case 3:
            return "@loxysoft.com"

        case 4:
            return "@telia.com"

        case 5:
            return "@outlook.com" 
            
        case 6:
            return "@storsjogymnasiet.se" 
            
        case 7:
            return "@facebook.com"    


    }
}












