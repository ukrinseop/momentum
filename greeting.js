const form = document.querySelector(".js-form"); // form 자체
const input = form.querySelector("input"); // input tag(what is your name)
const greeting = document.querySelector(".js-greetings"); // <h4>
// Changing HTML

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
//Changing CSS


function saveName(text) { // chrome application의 localStorage에 key는 USER_LS, value는 text로 저장함
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    // event의 preventDefault
    event.preventDefault(); // 디폴트 이벤트가 발생하는것을 막고???
    const currentValue = input.value; // input에 넣은 value가져옴, 여기서는 currentUser의 값인 사람 이름이 될거임
    // console.log(currentValue); // 확인용
    paintGreeting(currentValue); // 가져온 이름을 파라미터로 printGreeting을 실행해서 사람이름 나타냄, paintGreeting가 실행되면 form이 없어짐
    saveName(currentValue); // 이름을 저장함
}


function askForName() { //currentUser가 null일 경우 실행
    form.classList.add(SHOWING_CN); // form에 클래스 "showing"집어넣어서 form이 보이게 만듦
    form.addEventListener("submit", handleSubmit);  // 엔터치면 handleSubmit() 동작
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
} // Showing Hello ~~~

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
        // he is not   
    } else {
        // he is
        paintGreeting(currentUser);
    }
}
/* chrome console에서 확인 localStorage
 * localStorage.setItem("nico", true)
 * ->> 
 * localStorage.getItem("nico") ->> true
 */
function init() {
    loadName();
}
init();