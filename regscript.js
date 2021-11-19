let zaregatsa = document.querySelector("#btn2");
let emailforsensing = document.querySelector("#email");
let counter = 0;
let checkbox = document.querySelector("#one")
let verifificationInput = document.querySelector("#ver");
zaregatsa.addEventListener('click', function (st) {
    let login = document.querySelector("#emailInput").value;
    let password = document.querySelector("#passwordInput").value;
    localStorage.setItem("name", (login));
    localStorage.setItem("password", (password));
    if (login === "") {
        alert("Вы не ввели логин,ошибка")
    }
    let Account = {
        name: login,
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

let voity = document.querySelector("#btnSecond")
voity.addEventListener('click', function (st) {
    let emailSecond = document.querySelector("#emailInput2").value;
    let passwordSecond = document.querySelector("#passwordInput2").value;
    localStorage.setItem("name2", (emailSecond));
    localStorage.setItem("password2", (passwordSecond));

    if (emailSecond === localStorage.getItem("name") && passwordSecond === localStorage.getItem("password")) {
        console.log("Вы успешно вошли")
        alert("Вы успешно вошли")
        window.location.href = "cart.html"
    }
    else {
        alert("Вы ввели некорректные данные,ошибка")
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

let pismootpr = document.querySelector("#btn1")
pismootpr.addEventListener('click', function () {
    sendEm()
})


let code = (Math.floor(Math.random() * 1000000))


function sendEm() {
    let templateParams = {
        from_name: 'Asselina',
        ver_code: code,
        to_email: `${emailforsensing.value}`
    };

    emailjs.send('service_89b1wzg', 'template_tbbrbab', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}


zaregatsa.addEventListener('click', function () {
    if (code == verifificationInput.value) {
        alert("Вы успешно зарегестрировались")
    } else {
        alert("Неправильный код!Попробуйте заново")
    }
})