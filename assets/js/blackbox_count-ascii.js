function preprocess(input) {
    var output;
    // remove non ASCII characters
    output = removeNonAscii(input);
    // remove all white space
    outpu = removeWhitespace(output);
    console.log("input: '" + input + "'");
    console.log("output: '" + output + "'");
    return output
}

function removeNonAscii(input) {
    var output;
    output = input.replace(/[^\x00-\x7F]/g, '');
    return output
}

function removeWhitespace(input) {
    var output;
    output = input.replace(/ /g, '');
    return output
}

document.getElementById("bb_button_compute").addEventListener("click", function() { 
    // get the input string from the HTML
    let input = document.getElementById("bb_input").value;
    // pre-process the input string
    let processedInput = preprocess(input);
    let output = processedInput.length;
    // write results to the HTML
    document.getElementById("bb_result_compute").innerText = output;
    document.getElementById("bb_input_preprocessed").innerText = processedInput;

});

document.getElementById("bb_button_clear").addEventListener("click", function() {

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
});