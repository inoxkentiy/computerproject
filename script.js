
document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('selprocessor');
    if (localStorage['selprocessor']) {
        input.value = localStorage['selprocessor'];
    }
    document.getElementById("submit").addEventListener('click', function () {
        localStorage['selprocessor'] = this.value;
    }) 
});
console.log(selprocessor)