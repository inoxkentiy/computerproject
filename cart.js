
let ofor = document.querySelector("#oforbtn");

let delOneObj = document.querySelector("#delOneObj");
let sum = 0;

let cart = JSON.parse(localStorage.getItem("cartArray"))
let clear = document.querySelector("#deletebtn");
listdiv = $("#list")
cart.map(item => listdiv.append(`<div class="info_block">
    <p>Товар: ${item.name}</p>
    <p>Цена: ${item.price} KZT</p>
    <button class="buttonStyle" id="delOneObj${cart.indexOf(item)}">Убрать товар</button><br>
    </div>`))

clear.addEventListener('click', function () {
    localStorage.removeItem("cartArray");
    listdiv.empty();
})

for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
}
console.log(sum)
let red = document.getElementById('red');
let gbb = document.getElementById('gbb');
let freeshipping = document.getElementById('freeshipping');
let sumwithShipping = sum + 5000;
if (sum > 200000) {
    red.append(`${sum}KZT`)
} else {
    red.append(`${sum}KZT`)
    gbb.append(`+доставка 5000KZT`)
    freeshipping.append(`${sumwithShipping}KZT`)

}
clear.addEventListener('click', function () {
    localStorage.removeItem("cartArray");
    listdiv.empty();
})
console.log(cart)

ofor.addEventListener('click', function () {
    alert(`Вы должны оплатить ${sumwithShipping}.
    Как будете платить?
    Картой или наличными?`)
})


let delOneObj0 = document.getElementById(`delOneObj${cart.indexOf(item)}`);
delOneObj0.addEventListener('click', function () {
    cart.splice(cartArray.indexOf(item))
    location.reload()
})