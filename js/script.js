const welcome = document.querySelector(".welcome")
const name = document.querySelector(".name")
const job = document.querySelector(".job")
const background_img = document.querySelector(".background")

let welcome_text = "Hello, I'm ";
let name_text = "Yehya Lakehal.";
let job_text = ["A Software Developper.", "A YouTuber.", "A Freelancer."];
let char_index = 0;
let word_index = 0;
let is_deleting = false;
let write_speed = 200;
let delete_speed = 100;

const welcomeTypeEffect = () => {
    const current_char = welcome_text.substring(0, char_index);
    welcome.innerHTML = current_char;

    if (char_index < welcome_text.length) {
        char_index++;
        setTimeout(welcomeTypeEffect, write_speed);
    }

};

const nameTypeEffect = () => {
    const current_char = name_text.substring(0, char_index);
    name.innerHTML = current_char;

    if (char_index < name_text.length) {
        char_index++;
        setTimeout(nameTypeEffect, write_speed);
    }
};

const jobTypeEffect = () => {
    const current_word = job_text[word_index]
    const current_char = current_word.substring(0, char_index);
    job.innerHTML = current_char;

    if (!is_deleting && char_index < current_word.length) {
        char_index++;
        setTimeout(jobTypeEffect, write_speed);
    } else if (is_deleting && char_index > 0) {
        char_index--;
        setTimeout(jobTypeEffect, delete_speed);
    } else {
        is_deleting = !is_deleting;
        word_index = !is_deleting ? (word_index + 1) % job_text.length : word_index;
        setTimeout(jobTypeEffect, 1200);
    }
};

if (window.matchMedia("(max-width: 712px)").matches) {
    background_img.src = "imgs/coffee-code-dark.png"
} else {
    background_img.src = "imgs/code-coffee.png"
}


welcomeTypeEffect();
nameTypeEffect();
jobTypeEffect();