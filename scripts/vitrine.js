fetch("https://corebiz-test.herokuapp.com/api/v1/products").then(function (response) {
    response.json().then(function (data) {
        data.forEach(element => {
            // console.log(element)

            if (element.listPrice != null) {
               var listPrices = (Math.round(element.listPrice * 1) / 100).toFixed(2).replace('.', ',');
            }

            if (element.installments.length > 0 ){
                var parcelas = element.installments[0].quantity               
            }

            if (element.installments.length > 0 ){
                var valueParcelas = (Math.round(element.installments[0].value * 1) / 100).toFixed(2).replace('.', ',');              
            }



            var estrelas = element.stars;
            var img = $('<img src="images/card/starFull.svg" alt="">');
            i = 0;
            var controle = estrelas >= i ? img : `<img src="images/card/star.svg" alt=""></img>`

          

            $('.productsCenter').append(`            
            <div class="card" style="width: 18rem;">
                <div class="boxImg">${ listPrices != undefined ? `
                    <div class="color">
                        <div>
                            <p>OFF</p>
                        </div>
                    </div>` : ``
                }                    
                    <img src="${element.imageUrl}" class="card-img-top">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${element.productName}</h5>
                    <div class="stars">






                     
                    </div>
                    <div class="prices">
                        
                        ${ listPrices != undefined ? `<p class="card-text lastPrice">de R$ ${listPrices}</p>` : `<p class="card-text lastPrice marginPrice"></p>`
                        }
                        
                        <p class="card-text price">por R$ 
                        ${(Math.round(element.price * 1) / 100).toFixed(2).replace('.', ',')}
                        </p>      
                    </div> ${parcelas > 0 ? `
                    <p class="card-text subPrice">ou em ${parcelas}x de R$ ${valueParcelas}</p>
                    ` : ` <p class="card-text subPrice"></p>`}                  
                    
                    <a href="#" class="comprar btn btn-primary">Comprar</a>
                </div>
            </div>
            
            `)
            $(".comprar").click(function (event) {
                event.preventDefault()
            })
        });
    })
})