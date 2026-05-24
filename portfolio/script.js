// Typing Effect

const text = "Frontend Developer | CSE Student";

let index = 0;

function typeText(){

  if(index < text.length){

    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeText, 100);

  }

}

typeText();


// Scroll Animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

      section.classList.add("show");

    }

  });

});