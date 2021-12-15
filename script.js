




let rand = window.addEventListener("load", function(){
    generate_number();
});



document.querySelector("#again_btn").addEventListener("click", function(){
    let score = document.querySelector("#score_value").textContent = "20";
    let body = document.querySelector("body").style.backgroundColor = "rgb(24,24,24)";
    document.querySelector("#number_input").value = "";
    document.querySelector("#secret_num_p").textContent  = "?";
    document.querySelector("#guessing_message").textContent = "Start guessing ...";
    console.log("Restarted")
    generate_number();
});

let get_score_value = function(){
    return document.querySelector("#score_value").textContent;
}




function event_main_code(rand_num = ""){
    console.log(rand_num);
    if (rand_num !== ""){
        let random_number = Number(rand_num);
        console.log("Here")
    }
    let input_value = document.querySelector("#number_input").value;
    let guessing_message = document.querySelector("#guessing_message");
    let score = document.querySelector("#score_value");
    let score_value = Number(score.textContent);

    if (score_value !== 0){
        if (input_value !== ""){
            if (random_number === Number(input_value)){
                let body = document.querySelector("body").style.backgroundColor = "rgb(37, 162, 29)";
                let secret_number_p = document.querySelector("#secret_num_p").textContent = input_value;
                let high_score_value = document.querySelector("#highscore_value");

                if (Number(high_score_value.textContent) < Number(get_score_value())){
                    high_score_value.textContent = get_score_value();
                }

                guessing_message.textContent = "Correct number !!!";
            }else if (random_number > Number(input_value)){
                guessing_message.textContent = "Too low";
                score.textContent = get_score_value() - 1;
                console.log(score.textContent);

            }else if (random_number < Number(input_value)){
                guessing_message.textContent = "Too high";
                score.textContent = get_score_value() - 1;
                console.log(score.textContent);

            }
        }else if (input_value === ""){
            alert("Enter number in the input field!");
        }
    }else if (score_value === 0){
        let body = document.querySelector("body").style.backgroundColor = "rgb(252, 0, 6)";
        guessing_message.textContent = "You lost the game !!!";
    }
}
document.querySelector("#button_submit").addEventListener("click", function(){
    alert("Clicked");
    event_main_code();
});

document.querySelector("#number_input").addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event_main_code();
    }
});







