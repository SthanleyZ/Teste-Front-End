$("#formValidation").submit(function () {
    let text = $('#nome').val();
    let email = $('#email').val()
    event.preventDefault()
    let dados = {
        email: email,
        name: text
    }

    if (!$(this).valid()) {
        return
    }

    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(function (response) {
            return alert('Criado com sucesso')
        })
});

