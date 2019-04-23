
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

/* NEW DATE()
 * const date = new Date() ->> undefined
 * date ->> MON Apr 22 2019 15:04:31 GMT+0900(한국표준시){}
 * date.getDay() ->> 1(월요일)
 * date.getDate() ->> 날짜
 * date.getHours() ->> 시
 * date.getMinutes() ->> 분
 */

function getTime() {
    const date = new Date(); // new Date의 Date는 class임
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // clockTitle.innerText = `${hours}:${minutes}:${seconds}`; // 객체 안에 텍스트를 넣기 위해서
    /* 여기까지 하면 00:00으로밖에 표시안됨
     * 왜냐하면 getTime()을 호출하지 않아서, init()에 getTime()을 넣고 실행하면 작동
     * 그러나 계속해서 새로고침을 해야만 시간이 바뀜
     * 또 한가지 문제점은 시간부분이 10(시,분,초) 이하일때는 0, 1, 2 이렇게 출력됨,
     * 01, 02, 03으로 나오게 하기위해 여기서는 삼항연산자(ternary operator)를 쓸거임
     */

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    /*setInterval(fn, 1000)
     * function sayHello() {console.log("sayHello!!")}
     * setInterval(sayHello, 1000) // 하면 1초간격으로 sayHello()가 실행됨
     * 함수이름에는 ()를 붙이지 않음!!!
     */
}

function init() {
    // getTime(); // 이렇게만하면 직접 새로고침을 눌러야만 내용이 갱신됨
    setInterval(getTime, 1000); // 1초간격으로 실행됨
}

init();