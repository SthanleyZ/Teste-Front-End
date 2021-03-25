fetch("https://corebiz-test.herokuapp.com/api/v1/products").then(function (response) {
    response.json().then(function (data) {
        data.forEach(element => {
            if (element.listPrice != null) {
                var listPrices = (Math.round(element.listPrice * 1) / 100).toFixed(2).replace('.', ',');
            }
            if (element.installments.length > 0) {
                var parcelas = element.installments[0].quantity
            }
            if (element.installments.length > 0) {
                var valueParcelas = (Math.round(element.installments[0].value * 1) / 100).toFixed(2).replace('.', ',');
            }
            var estrelas = element.stars;
            let max = 5;
            var elemento = document.createElement('div');
            elemento.className = "stars";
            for (let i = 1; i <= max; i++) {
                if (i <= estrelas) {
                    var starFull = document.createElement('img');
                    starFull.src = "images/card/starFull.svg";
                    elemento.append(starFull)
                }
                else {
                    var starVazia = document.createElement('img');
                    starVazia.src = "images/card/star.svg";
                    elemento.append(starVazia)
                }
            }
            var card = $(`<div class="card" style="width: 18rem;"></div>`)
            var boxImg =
                $(`<div class="boxImg">
                ${listPrices != undefined ?
                        `
                        <div class="color">
                            <div>
                                <p>OFF</p>
                            </div>
                        </div>
                    `
                        : ``
                    }                    
                <img src="${element.imageUrl}" class="card-img-top">
            </div>
            `)
            var cardBody = $(`<div class="card-body"></div>`)
            var cardTitle = $(`<h5 class="card-title">${element.productName}</h5>`)
            var prices =
                $(`${listPrices != undefined ? `<p class="card-text lastPrice">de R$ ${listPrices}</p>` : `<p class="card-text lastPrice marginPrice"></p>`}                
            <p class="card-text price">por R$
                ${(Math.round(element.price * 1) / 100).toFixed(2).replace('.', ',')}
            </p>
            </div> ${parcelas > 0 ? `<p class="card-text subPrice">ou em ${parcelas}x de R$ ${valueParcelas}</p>` : ` <p class="card-text subPrice"></p>`}                    
            <a href="#" class="comprar btn btn-primary">Comprar</a>`)
            $('.productsCenter').append(card)
            card.append(boxImg)
            card.append(cardBody)
            cardBody.append(cardTitle)
            cardBody.append(elemento)
            cardBody.append(prices)
            $(".comprar").click(function (event) {
                event.preventDefault()
            })
        });
    })
})