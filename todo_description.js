



const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-doDoList");


const TODOS_LS = 'toDos';

let toDos = []; //비어있는 array로 만듦
// 해야할 일을 생성했으면 그게 이 'toDos' array에 추가되도록

// function something(toDo) { // forEach에 대한 예시
//     console.log(toDo.text)
// }

function filterFn(toDo) {
    return toDo.id === 1; // id가 1일 경우만.. 뭐?? ㅡㅡ;
    //filter는 array의 모든 아이템을 통해 함수를 실행하고
    // 그리고 true인 아이템들만 가지고 새로운 array를 만들고
}


function deleteToDo(event) {
    // console.log(event); // event를 출력해보면 문제점은 어떤 버튼이 클릭되었는지를 알아야함 
    // event에 'target'이라는 것이 있다
    // console.log(event.target); // 근데 누가 parent인지 알수없음
    // 근데 버튼의 parent는 <li id = "??"> 인 것을 알 수 있음
    // console.dir(event.target); // 객체 클릭해서 찾아보면 parentNode라는 것이 있음 값은 li#1
    // console.log(event.target.parentNode) // 확인
    // 구글에서 'delete child element mdn' 찾아봄
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); // 버튼 누르면 지워짐, 새로고침하면 살아남
    // const cleanToDos = toDos.filter(filterFn); // 뭔소리지
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    }); // 뭔소리지
    // console.log(cleanToDos);// 이렇게 하면 id가 1인경우는 없고 id=2,3,4이기 때문?? 뭔소리
    // cleanTodos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것이야
    toDos = cleanToDos; // 대체하고 
    saveToDos(); // 저장함
}


function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // string으로 저장되므로 JSON.stringify?? 를 쓸거임, 뭔소리야야?
}   // 그냥 toDos를 인자로 주면 콘솔창에 object로 나옴 그래서 스트링형태를 바꿔줘야함


function paintToDo(text) {
    // console.log(text) //확인용
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = " X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerHTML = text;
    li.appendChild(delBtn); // 처음에 이게 왜 바로 아래있어서 자리를 바꾼거지?
    li.appendChild(span); //뭔가를 그의 parent element안에 넣는거
    li.id = newId; // 리스트에도 id를 줌
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId // id값은 배열length의 +1을 더하니까 아이디는 1부터 시작됨
    }
    toDos.push(toDoObj); // doDos배열 안에 toDoObj를 넣음
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // console.log(loadedToDos); // JSON.parse 하기 전 : 단순히 문자의 나열?로만 나오고
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos); // JSON.parse 한 후 : object로 변환되어 뭔가를 할 수 있음
// JSON : JavaScript Object Notation : 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능, 또는 string을 object로 바꿔주기도 함
        // parsedToDos.forEach(function(toDo) {
        //     console.log(toDo.text) // 이렇게 하면 function에서 각각 실행됨?
        //     // function부분을 밖에다가 따로 뺄 수도 있음 
        // })
        // parsedToDos.forEach(something);
        
        parsedToDos.forEach(function(toDo) { //forEach는 array를 위한 function
            // forEach는 list에 있는 모든 item을 위한 함수를 실행시킴
            paintToDo(toDo.text);
        });
    } 
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();