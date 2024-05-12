let container = document.getElementById('container');
let num = 16;
let color;

document.querySelector("#btn").addEventListener("click", () => {

    do {
        let squareNumber = prompt("Enter number of squares");
        num = Number(squareNumber);
        console.log(num);
        grid()
    } while (num > 100 || num < 1);
});

function randColor(){
    let x= Math.floor(Math.random() * 256);
    let y= Math.floor(Math.random() * 256);
    let z= Math.floor(Math.random() * 256);

    color = "rgb("+x+","+y+","+z+")";
}


function grid() {
    container.innerHTML = "";
    for (let w = 0; w < num; w++) {

        let redak = document.createElement("div");
        redak.classList.add("redak");

        for (let e = 0; e < num; e++) {
            let div = document.createElement('div');
            div.style.opacity = 1;
            div.addEventListener("mouseenter", () => {
                randColor()
                div.style.backgroundColor = color;
                div.style.opacity = div.style.opacity - 0.1;
            });
            div.classList.add("divs");
            //div.setAttribute("style", "width:100px; heigth:100px; border:solid; border-color:black;")
            redak.appendChild(div);
        }
        container.appendChild(redak);
    }
}
grid()



