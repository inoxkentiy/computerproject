let brickbutton = document.getElementById('brick')
 divwrap = $('#wrap')


brickbutton.addEventListener('click', function () {
    divwrap.show()
    Swal.fire("Внимание!", "Перед началом выбора уведомляем вас о том, что вы можете выбрать только один элемент из всего списка.Поэтому, перед тем,как нажать кнопку для оформления заказа,убедитесь в правильности выбранных товаров.", "success");
})
let subButton = document.getElementById("submit")

subButton.addEventListener('click',
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
)
