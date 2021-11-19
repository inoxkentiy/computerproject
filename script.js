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
    Swal.fire("Внимание!", "Перед началом выбора уведомляем вас о том,что вы можете выбрать лишь один товар из всего заданного спика,поэтому,отнеситесь к выбору со всей осторожностью.", "success");
})
function addToCart(name, price) {
    let element = {
        name: name,
        price: price,
        //type: mouse
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