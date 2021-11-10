let btn = document.querySelector("#btn");
let counter = 0;
let checkbox = document.querySelector("#checkbox")

btn.addEventListener('click', function (st) {
    let email = document.querySelector("#emailInput").value;
    let password = document.querySelector("#passwordInput").value;
    localStorage.setItem("name", (email));
    localStorage.setItem("password", (password));
    if (email === "") {
        alert("Вы не ввели логин,ошибка")
    }
    let Account = {
        name: email,
        password: password
    }

    let arrayAccount = JSON.parse(localStorage.getItem("arrayAccount"));
    if (arrayAccount === null) {
        arrayAccount = [];
    }

    let counter = JSON.parse(localStorage.getItem("counter"));
    if (counter === null) {
        counter = [];
    }

    let zxc;
    zxc = document.getElementById('one');
    if (zxc.checked) {

        arrayAccount.push(Account);
        localStorage.setItem("arrayAccount", JSON.stringify(arrayAccount));
        console.log(arrayAccount)
        counter++;
        localStorage.setItem("counter", JSON.stringify(counter));
    }
    else {
        alert('Нажмите на квадрат');
    }






});



// Добавление 2-й кнопки.
let buttonSecond = document.querySelector("#btnSecond")
btnSecond.addEventListener('click', function (st) {
    let emailSecond = document.querySelector("#emailInput2").value;
    let passwordSecond = document.querySelector("#passwordInput2").value;
    localStorage.setItem("name2", (emailSecond));
    localStorage.setItem("password2", (passwordSecond));
    //Если email - 0=>alert 

    if (emailSecond === localStorage.getItem("name") && passwordSecond === localStorage.getItem("password")) {
        console.log("Вы успешно вошли")
        alert("Вы успешно вошли")
        location.href = "index.html"
    }
    else {
        alert("Вы не ввели логин,ошибка")
        location.href = "registration.html"
    }


});

let buttonDelete = document.querySelector("#delete")
buttonDelete.addEventListener('click', () => {
    localStorage.removeItem("arrayAccount");
    localStorage.removeItem("counter")
})



let refresh = document.querySelector("#refresh")


refresh.addEventListener('click', () => {
    let refreshBlock = $("#refreshBlock")

    refreshBlock.append(`<div>Зарегистрированных  пользователей: ${(localStorage.getItem("counter"))}</div>`)
    console.log(JSON.parse(localStorage.getItem("counter")))
})