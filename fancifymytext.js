// "Bigger!" button query
let biggerButton = document.getElementById("bigger");

let inputText = document.getElementById("inputText");

let fancyButton = document.getElementById("fancyshmancy");
let boringButton = document.getElementById("boringbetty");
let mooButton = document.getElementById("moomoo")

// Bigger button increases font
function increaseFont() {
    // Get the current font size
    let defaultFontSize = window.getComputedStyle(inputText, "").getPropertyValue('font-size'); 

    // Convert the font size to a number and increase it
    let currentSize = parseFloat(defaultFontSize);

    // Increase font size
    inputText.style.fontSize = (currentSize + 2) + 'px';
}

// Moo button listener
function mooHandler() {
    inputText.textContent = inputText.textContent.toUpperCase();
    
    let newText = inputText.textContent + "-Moo";
    inputText.textContent = newText;
}

// Fancy button listener
fancyButton.addEventListener("change", () => {
    inputText.style.color = "blue";
    inputText.style.fontWeight = "bold";
    inputText.style.textDecoration = "underline";
});

// Boring button listener
boringButton.addEventListener("change", () => {
    inputText.style.color = "";
    inputText.style.fontWeight = "";
    inputText.style.textDecoration = "";
})