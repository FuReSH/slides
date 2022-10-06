document.getElementById("bb_button_compute").addEventListener("click", function() { 
        // get the input string from the HTML
        let chars = document.getElementById("bb_input").value;  
        // pre-process the input string
        let trimmedChars = chars.trim().replace(/ /g,'')
        // set dummy variables for the processing and output
        let count = 0;
        let output_text = [];
        // the actual computing
        for (let index = 0; index < trimmedChars.length; index++) {
            const element = trimmedChars[index];
            let asc = element.charCodeAt(0);
            if(asc < 128) {
                output_text.push(element);
                count ++;
            }
        }

        let result_text = output_text.join("");
        let result_count = count;
        // write results to the HTML
        document.getElementById("bb_result_compute").innerHTML = result_count;
        document.getElementById("bb_input_preprocessed").innerHTML = result_text;

    });

document.getElementById("bb_button_clear").addEventListener("click", function() { 
    
    let text = document.getElementsByClassName('to_clear');

    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        if (document.getElementsByTagName("textarea")) {
            element.value = '';
        }
        if (document.getElementsByTagName("textarea")) {
            element.innerHTML = '';
        }
    } 
});