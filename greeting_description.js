/**이해 안되는 부분
 * function handleSubmit(event)에서의 event가 어디서 온 것인지?
 * 그 다음줄
 * event.preventDefault();의 뜻은 뭔지?
 */

/**OverView
 * 이름을 localStorage에 저장하는 역할을 함
 * 없으면 입력해서 저장하고 입력창을 없애고
 * 있으면 입력창을 없애고 이 역할만 함.
 */

const form = document.querySelector(".js-form"); // form 자체
const input = form.querySelector("input"); // .js-form 안의 input tag(what is your name)
const greeting = document.querySelector(".js-greetings"); // <h4> 내용은 Hello 이름~ 이 들어갈거임
// Changing HTML

const USER_LS = "currentUser";
const SHOWING_CN = "showing"; //.showing{display:none or block}
//Changing CSS

function saveName(text) { // text는 아래 handleSubmit의 saveName(currentValue)임. 즉, 사람이름(input.value)
    localStorage.setItem(USER_LS, text);
    // chrome application의 localStorage에 key는 USER_LS, value는 text로 저장함
    
    /* chrome console에서 확인 localStorage
    * localStorage.setItem("nico", true)
    * ->> 
    * localStorage.getItem("nico") ->> true
    */
}

function handleSubmit(event) { // event가 어디서 온거지? submit인가???????????????????????????물음표x100개
    // event의 preventDefault
    event.preventDefault(); // 디폴트 이벤트가 발생하는것을 막고???
    const currentValue = input.value; // input에 넣은 value가져옴, 여기서는 currentUser의 값인 사람 이름이 될거임
    // console.log(currentValue); // 확인용
    paintGreeting(currentValue); // 가져온 이름을 파라미터로 printGreeting을 실행해서 사람이름 나타냄, paintGreeting가 실행되면 form이 없어짐
    saveName(currentValue); // 이름을 chrome의 localStorage에 저장함
}

function askForName() { // currentUser가 null일 경우 실행
    form.classList.add(SHOWING_CN); // form에 class="showing" 을 넣어서 form이 보이게 만듦
    // not null이면 display:none;, null이면 display:block;이 되면서 display:none;을 무력화시키는 것 같음
    form.addEventListener("submit", handleSubmit);  // 이름 적고 엔터치면 handleSubmit() 동작
}

function paintGreeting(text) { //text는 currentValue임 즉, input.value인 사람 이름
    form.classList.remove(SHOWING_CN); // .showing을 없애서 안보이게 하고
    greeting.classList.add(SHOWING_CN); // .showing을 넣어서 greeting이 뜨게함
    //const greeting = document.querySelector(".js-greetings") <h4> 부분임 
    greeting.innerText = `Hello ${text}`; // index.html의 <h4> 안에 미리 써둔 "Hello User!"을 대체함
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // USER_LS = "currentUser"
    // localStorage의 currentUser의 value를 가져와서 currentUser 상수에 저장.
    if(currentUser === null) { // currentUser가 null이면 askForName() 호출. 처음에는 당연히 비었을 것이므로 askForName() 호출
        askForName(); 
        // he is not
    } else {
        // he is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();