// functions to remove characters from a string
function replaceNonAscii(input, replace) {
    var output = input.replace(/[^\x00-\x7F]/g, replace);
    console.log("Replaced all non-ASCII characters in '" + input + "' with '" + replace +"'")
    return output
}
function removeWhitespace(input) {
    var output = input.replace(/\s+/g, '');
    console.log("Removed all white space characters from '" + input + "'")
    return output
}
function removeLetters(input) {
    var output = input.replace(/\w+/g, '');
    console.log("Removed all letters from '" + input + "'")
    return output
}
function retainLetters(input) {
    var output = input.replace(/\W+/g, '');
    console.log("Removed everything but letters and digits from '" + input + "'")
    return output
}
// function to preprocess an input string by calling other functions
function preprocess(input) {
    var output;
    // remove non ASCII characters
    output = replaceNonAscii(input, '');
    // remove all white space
    // output = removeWhitespace(output);
    // remove everything but letters and digits
    output = retainLetters(output);
    return output
}
// the blackbox function: calling other function
function blackbox() {
    // get the input string from the HTML
    let input = document.getElementById("bb_input").value;
    console.log("Processing '" + input +"'")
    // pre-process the input string
    let processedInput = preprocess(input);
    console.log("Counting characters in '" + processedInput + "'")
    let output = processedInput.length;
    console.log("Output: '" + output + "'")
    // write results to the HTML
    document.getElementById("bb_result_compute").innerText = output;
    document.getElementById("bb_input_preprocessed").innerText = processedInput;
}
// helper function: clear all textboxes
function clear() {
    let text = document.getElementsByClassName('to_clear');
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if (document.getElementsByTagName("textarea")) {
            element.value = '';
        }
        if (document.getElementsByTagName("textarea")) {
            element.innerText = '';
        }
    }
};

// attaching the blackbox to a specific button
document.getElementById("bb_button_compute").addEventListener("click", function(){
    blackbox()
});

document.getElementById("bb_button_clear").addEventListener("click", function() {
    clear()
});