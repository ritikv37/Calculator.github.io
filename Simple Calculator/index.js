
let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){   
            case '=':
                display.innerText = eval(display.innerText);
                break;
            case 'C':
                display.innerText = "";
                break;
            case '←':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:display.innerText += e.target.innerText;
        }
    })
}
)

const moonPath = "M9.5 15C9.5 23.2843 15 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C15 0 9.5 6.71573 9.5 15Z";

const sunPath = "M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z";
const darkMode = document.querySelector("#darkMode")
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline
    .add({
        targets: ".sun",
        d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle ? -500 : 320
    }, '-= 350'
    )
    
     .add({
         targets: "body",
         backgroundColor: toggle ?'rgb(255,255,255)' : "rgb(22,22,22)"
         
     }, '-= 700'
     )
     .add({
        targets: "div",
        backgroundColor: 'rgb(255,255,255)'
    });
     if(!toggle){
        toggle = true;
     }else{
        toggle = false;
     }
});
