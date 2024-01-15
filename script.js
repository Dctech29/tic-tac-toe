Boxes = document.querySelectorAll(".boxes");
allBoxes = document.querySelectorAll(".innerBox>div");

// WinningPattern = ["0 1 2", "3 4 5", "6 7 8", "0 4 8", "2 4 6", "0 3 6", "2 5 8", "1 4 7"]

// -----------------------------------------------------------------------------------
disableAll = () => {
    allBoxes.forEach((val) => {
        val.classList.add("disabled");
        val.classList.remove("boxes");
        val.setAttribute("value", Math.floor(Math.random() * 999))
    })
}

const addCross = (value) => {

    disableAll()

    switch (value) {
        case 1:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "65px"
            document.querySelector(".cross").style.left = "-15px"
            document.querySelector(".cross").style.width = "500px"
            document.querySelector(".cross").style.height = "10px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        case 2:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "225px"
            document.querySelector(".cross").style.left = "-15px"
            document.querySelector(".cross").style.width = "500px"
            document.querySelector(".cross").style.height = "10px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        case 3:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "385px"
            document.querySelector(".cross").style.left = "-15px"
            document.querySelector(".cross").style.width = "500px"
            document.querySelector(".cross").style.height = "10px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        case 4:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "230px"
            document.querySelector(".cross").style.left = "-115px"
            document.querySelector(".cross").style.width = "700px"
            document.querySelector(".cross").style.height = "10px"
            document.querySelector(".cross").style.rotate = "45deg"

            break;
        case 5:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "230px"
            document.querySelector(".cross").style.left = "-115px"
            document.querySelector(".cross").style.width = "700px"
            document.querySelector(".cross").style.height = "10px"
            document.querySelector(".cross").style.rotate = "135deg"
            break;
        case 6:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "-15px"
            document.querySelector(".cross").style.left = "70px"
            document.querySelector(".cross").style.width = "10px"
            document.querySelector(".cross").style.height = "500px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        case 7:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "-15px"
            document.querySelector(".cross").style.left = "230px"
            document.querySelector(".cross").style.width = "10px"
            document.querySelector(".cross").style.height = "500px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        case 8:
            // document.querySelector(".cross").style.display = "block";
            document.querySelector(".cross").style.top = "-15px"
            document.querySelector(".cross").style.left = "390px"
            document.querySelector(".cross").style.width = "10px"
            document.querySelector(".cross").style.height = "500px"
            document.querySelector(".cross").style.rotate = "none"
            break;
        default:
            break;
    }
}
const checkWin = () => {

        // 11111111111111111111111111111111111111111111111111111111
        if (allBoxes[0].getAttribute("value") == allBoxes[1].getAttribute("value") && allBoxes[2].getAttribute("value") == allBoxes[1].getAttribute("value")) {

            addCross(1)

            allBoxes[0].classList.add("flash");
            allBoxes[1].classList.add("flash");
            allBoxes[2].classList.add("flash");
        }
        // 222222222222222222222222222222222222222222222222222222222
        if (allBoxes[3].getAttribute("value") == allBoxes[4].getAttribute("value") && allBoxes[5].getAttribute("value") == allBoxes[4].getAttribute("value")) {

            addCross(2)

            allBoxes[3].classList.add("flash");
            allBoxes[4].classList.add("flash");
            allBoxes[5].classList.add("flash");
        }
        //333333333333333333333333333333333333333333333333333333333
        if (allBoxes[6].getAttribute("value") == allBoxes[7].getAttribute("value") && allBoxes[8].getAttribute("value") == allBoxes[7].getAttribute("value")) {

            addCross(3)
            allBoxes[6].classList.add("flash");
            allBoxes[7].classList.add("flash");
            allBoxes[8].classList.add("flash");
        }
        // 444444444444444444444444444444444444444444444444444444444
        if (allBoxes[0].getAttribute("value") == allBoxes[4].getAttribute("value") && allBoxes[8].getAttribute("value") == allBoxes[4].getAttribute("value")) {
            flashBox(4)
            addCross(4)
        }
        // 5555555555555555555555555555555555555555555555555555555555
        if (allBoxes[2].getAttribute("value") == allBoxes[4].getAttribute("value") && allBoxes[6].getAttribute("value") == allBoxes[4].getAttribute("value")) {

            addCross(3)
            allBoxes[2].classList.add("flash");
            allBoxes[4].classList.add("flash");
            allBoxes[6].classList.add("flash");
        }
        // 6666666666666666666666666666666666666666666666666666666666
        if (allBoxes[0].getAttribute("value") == allBoxes[3].getAttribute("value") && allBoxes[6].getAttribute("value") == allBoxes[3].getAttribute("value")) {

            addCross(3)
            allBoxes[0].classList.add("flash");
            allBoxes[3].classList.add("flash");
            allBoxes[6].classList.add("flash");
        }
        // 7777777777777777777777777777777777777777777777777777777777
        if (allBoxes[1].getAttribute("value") == allBoxes[4].getAttribute("value") && allBoxes[7].getAttribute("value") == allBoxes[4].getAttribute("value")) {

            addCross(3)
            allBoxes[1].classList.add("flash");
            allBoxes[4].classList.add("flash");
            allBoxes[7].classList.add("flash");
        }
        // 8888888888888888888888888888888888888888888888888888888888
        if (allBoxes[2].getAttribute("value") == allBoxes[5].getAttribute("value") && allBoxes[8].getAttribute("value") == allBoxes[5].getAttribute("value")) {

            addCross(3)
            allBoxes[2].classList.add("flash");
            allBoxes[5].classList.add("flash");
            allBoxes[8].classList.add("flash");
        }
    }
    // -----------------------------------------------------------------------------------
const clearAll = () => {
    allBoxes.forEach((e) => {
        e.innerText = "";
        e.classList.add("boxes");
        e.classList.remove("disabled", "flash");
        e.setAttribute("value", Math.floor(Math.random() * 999))
        document.querySelector(".cross").style.display = "none";
    });
}
document.querySelector("body button").addEventListener("click", clearAll)

// ----------------------------------------------------------------------------------
Turn = true;

const fillBox = (e) => {

    if (e.classList.contains("boxes")) {

        if (Turn == true) {
            e.innerText = "O";
            e.setAttribute("value", 1)
            Turn = false;
        } else {
            e.innerText = "X";
            e.setAttribute("value", 0)
            Turn = true
        }
        e.classList.add("disabled");
        e.classList.remove("boxes");
    }

}

document.querySelectorAll(".boxes").forEach((e) => {
    e.addEventListener("click", function() {
        fillBox(e)
        checkWin()
    })
})

// ---------------------------------------------------------------------------------

// WinningPoints = [1,2,3]