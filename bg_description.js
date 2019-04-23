/**OverView
 * 배경이미지를 랜덤하게 뿌려주기 위해서 random함수를 발생시킴으로써,
 * image.src로 파일 번호를 바꿔줄 수 있어서 CSS보다는 JS로 꾸며준 것 같음.
 * 
 * 그 밖에 class이름을 추가한 것이나, prepend시킨 것은 CSS로 할 수도 있으나
 * 기왕 만든 김에 추가 한 듯. 이렇게 안하면 html상에서 추가 할 수가 없으니까.
 */


const body = document.querySelector("body"); // body를 객체화. 나중에 body.prepend(image) 하려고
const IMG_NUMBER = 3; // 배경이미지 개수는 3개로 정했음 그냥. 더 늘려도 됨

function paintImage(imgNumber) { // imgNumber는 randomNumber임 (1~3의 숫자중 아무거나)
    const image = new Image(); // document.createElement("img")의 역할과 같음 <img> 어쩌구의 태그가 생김
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage") // image에 class="bgImage"를 추가 시킴 왜? CSS에 추가하려고
    body.prepend(image); // image가 뒤로 깔리게 하는 역할
    // console.dir(image);
}

function genRandom() { // random number를 발생시켜 number를 리턴함
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom(); //리턴받은 랜덤수를 저장
    paintImage(randomNumber); // 램덤수를 인자로 받고 함수 실행
}

init();