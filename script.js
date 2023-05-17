let numbers = document.querySelectorAll(".number");
let output = document.querySelector(".output");
let elements = document.querySelectorAll(".element");
let num1 = '';
let result = '';

function display() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function () {
            if (!elements[i].className.includes('operator')) {
                num1 += elements[i].textContent.trim();
                output.innerHTML = num1;
            } else {
                output.innerHTML = elements[i].innerHTML;
                num1 = '';
            }

            result += elements[i].textContent.trim();
        })

    }
}

document.querySelector('.equal').addEventListener("click", function () {
    output.innerHTML = eval(result);
})

function reset() {
    output.innerHTML = '0';
    num1 = '';
    result = '';
}



display();

//this is a calculator

