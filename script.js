let random_number  = Number(Math.trunc(Math.random() * 20) + 1);

console.log(random_number);
let get_score_value = function(){
    return document.querySelector("#score_value").textContent;
}

document.querySelector("#button_submit").addEventListener("click", function(){
    let input_value = document.querySelector("#number_input").value;
    let guessing_message = document.querySelector("#guessing_message");
    let score = document.querySelector("#score_value");
    if (input_value !== ""){
        if (random_number === Number(input_value)){
            let body = document.querySelector("body").style.backgroundColor = "rgb(37, 162, 29)";
            let secret_number_p = document.querySelector("#secret_num_p").textContent = input_value;
            let high_score_value = document.querySelector("#highscore_value").textContent = get_score_value();
            guessing_message.textContent = "Correct number !!!";
        }else if (random_number > Number(input_value)){
            guessing_message.textContent = "Too low";
            score.textContent = get_score_value() - 1;

        }else if (random_number < Number(input_value)){
            guessing_message.textContent = "Too high";
            score.textContent = get_score_value() - 1;
        }
    }else if (input_value === ""){
        alert("Enter number in the input field!");
    }
});