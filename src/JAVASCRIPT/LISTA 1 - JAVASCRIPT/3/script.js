let TextInput = document.getElementById('input');
let btnUpdate = document.getElementById('btn-update');
let divResult = document.getElementById('div-result');

btnUpdate.addEventListener('click', function (e) {
    e.preventDefault();

    let text = TextInput.value;

    if (text === "") {
        divResult.textContent = "Erro! Campo vazio!";
        divResult.classList.add('error');
    } else {
        divResult.classList.add('sucess');
        divResult.textContent = text;
    }
})