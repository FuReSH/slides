// functions to remove characters from a string
function replaceNonAscii(input, replace) {
    var output = input.replace(/[^\x00-\x7F]/g, replace);
    return output
}

function removeWhitespace(input) {
    var output = input.replace(/ /g, '');
    return output
}
// function to preprocess an input string by calling other functions
function preprocess(input) {
    // remove non ASCII characters
    var output = replaceNonAscii(input, '');
    // remove all white space
    output = removeWhitespace(output);
    console.log("input: '" + input + "'");
    console.log("output: '" + output + "'");
    return output
}
// the blackbox function: calling other function
function blackbox() {
    // get the input string from the HTML
    let input = document.getElementById("bb_input").value;
    // pre-process the input string
    let processedInput = preprocess(input);
    let output = processedInput.length;
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