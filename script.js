let buttonBlock = $("#buttons_block")
let outputBlock = $("#output_block")
let buttonsArray = ['C', '√', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, 0, '.', '=']
buttonsArray.map(item => {
    buttonBlock.append(`
    <div class="button_item">
    ${item}
    </div>`)
})

let buttons = document.querySelectorAll(".button_item")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let buttonValue = event.currentTarget.innerText;
        if (buttonValue === '=') {
            let outputBlockBalue = outputBlock.text()
            let result = eval(outputBlockBalue);
            outputBlock.empty()
            outputBlock.append(result)
            listDiv = $("#list")
            listDiv.append(`${outputBlockBalue}=${result}`)
        } else if (buttonValue === '√') {
            let outputBlockBalue = outputBlock.text()
            let result = Math.sqrt(outputBlockBalue);
            outputBlock.empty()
            outputBlock.append(result)

            listDiv = $("#list")
            listDiv.append(`√${outputBlockBalue}=${result}`)
        }
        else {
            outputBlock.append(buttonValue)
        }
    })
    buttons[0].addEventListener('click', (event) => {
        outputBlock.empty()
    })
}
