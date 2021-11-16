let brickbutton = document.getElementById('brick')
let submitbutton = document.getElementById('submitbutton')
let divInfo = document.querySelectorAll("#containersec")
console.log(divInfo)

let ulList = document.querySelectorAll(".info")
console.log(ulList)

let buttons = document.querySelectorAll(".add")
console.log(buttons)


divwrap = $('#wrap')


brickbutton.addEventListener('click', function () {
    divwrap.show()
    Swal.fire("Внимание!", "Перед началом выбора уведомляем вас о том, что вы можете выбрать только один элемент из всего списка.Поэтому, перед тем,как нажать кнопку для оформления заказа,убедитесь в правильности выбранных товаров.", "success");
})
function addToCart(name, price) {
    let element = {
        name: name,
        price: price
    };

    let cartArray = JSON.parse(localStorage.getItem("cartArray"))
    if (cartArray === null) {
        cartArray = [];
    }

    cartArray.push(element);
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
    console.log(cartArray)

}
submitbutton.addEventListener('click', function () {
    window.location.href = "registration.html"
})