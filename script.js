let brickbutton = document.getElementById('brick')
let divwrap = document.getElementById('wrap')
document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('selProcessor');
    if (localStorage['selProcessor']) {
        input.value = localStorage['selProcessor'];
    }
    document.getElementById("submit").addEventListener('click', function () {
        localStorage['selProcessor'] = this.value;
    })
});
console.log(selProcessor)



// for select
$('.select').each(function () {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 350; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function () {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text($(this).find('span').text());

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
brickbutton.addEventListener('click', function () {
    divwrap.style.visibility = 'visible'
    Swal.fire("Внимание!", "Перед началом выбора уведомляем вас о том, что вы можете выбрать только один элемент из всего списка.Поэтому, перед тем,как нажать кнопку для оформления заказа,убедитесь в правильности выбранных товаров.", "success");
})