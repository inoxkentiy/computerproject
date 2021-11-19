
let ofor = document.querySelector("#oforbtn");

let delOneObj = document.querySelector("#delOneObj");
let sum = 0;

let cartArray = JSON.parse(localStorage.getItem("cartArray"))
let clear = document.querySelector("#deletebtn");
listdiv = $("#list")
cartArray.map(item => listdiv.append(`<div class="info_block">
    <p>Товар: ${item.name}</p>
    <p>Цена: ${item.price} KZT</p>
    <button class="buttonStyle" onclick="deleteitem('${item.name}')" id="delOneObj${cartArray.indexOf(item)}">Убрать товар</button><br>
    </div>`))
function deleteitem(name) {
    for (let i = 0; i < cartArray.length; i++) {
        if (cartArray[i].name === name) {
            cartArray.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    location.reload();
}


clear.addEventListener('click', function () {
    localStorage.removeItem("cartArray");
    listdiv.empty();
})

for (let i = 0; i < cartArray.length; i++) {
    sum += cartArray[i].price;
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
console.log(cartArray)

ofor.addEventListener('click', function () {
    alert(`Вы должны оплатить ${sumwithShipping}.
    Как будете платить?
    Картой или наличными?`)
})