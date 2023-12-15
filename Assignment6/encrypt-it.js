/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  let encryptButton = document.getElementById("encrypt-it");
  let inputText = document.getElementById("input-text");
  let resetButton = document.getElementById("reset");
  let result = document.getElementById("result");

  window.addEventListener("load", init);
  resetButton.addEventListener("click", handleReset);
  encryptButton.addEventListener("click", shiftMyCypher);
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleReset() {
    console.log("reset clicked");
    inputText.value = "";
    inputText.placeholder = "";
  } // End of handleReset

  function shiftMyCypher() {
    console.log("encrypt clicked");
    let inputString = inputText.value;
    var asciiArray = [];
    var charArray = [];

    // Increment each character by 1 in ASCII
    for (var i = 0; i < inputString.length; i++) {
      var charCode = inputString.charCodeAt(i);
      var newCypher;
      // If character is 'Z', change to 'A' ASCII value instead of incrementing
      if (inputString.charCodeAt(i) == 122) { asciiArray.push(97); }
        
      // Else increment char code by 1 like normal
      asciiArray.push(charCode + 1);
      charArray.push(String.fromCharCode(asciiArray[i]));
    }
    newCypher = charArray.join('');
    result.textContent = newCypher;
    console.log(newCypher);
    return newCypher;
    
} // End of shiftCypher

  function incrementChar(char) {
    var charCode = char.charCodeAt(0);

    // Incremenet ASCII code 
    charCode++;

    var newChar = String.fromCharCode(charCode);

    return newChar;
  }

})();
