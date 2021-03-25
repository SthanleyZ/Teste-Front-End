fetch("https://corebiz-test.herokuapp.com/api/v1/products").then(function (response) {
    response.json().then(function (data) {
        data.forEach(element => {
            

            $('.productsCenter').append(`            
            <div class="card" style="width: 18rem;">
                <div class="boxImg">
                    <div class="color">
                        <div>
                            <p>OFF</p>
                        </div>
                    </div>
                    <img src="${element.imageUrl}" class="card-img-top">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${element.productName}</h5>
                    <div class="stars">
                        <img src="images/card/starFull.svg" alt="">
                        <img src="images/card/starFull.svg" alt="">
                        <img src="images/card/star.svg" alt="">
                        <img src="images/card/star.svg" alt="">
                        <img src="images/card/star.svg" alt="">
                    </div>
                    <p class="card-text price">por R$ 
                    ${(Math.round(element.price * 1) / 100).toFixed(2).replace('.',',')}
                    </p>                        
                    <p class="card-text subPrice">installments</p>
                    <a href="#" class="comprar btn btn-primary">Comprar</a>
                </div>
            </div>
            
            `)
        });
    })
})



// <img src="${element.imageUrl}" alt="">
            // <div> ${element.productName} </div>

{/* <div class="card" style="width: 18rem;">
<div class="color">
    <div>
        <p>OFF</p>
    </div>
</div>
<img src="images/slides/slide1.png" class="card-img-top">
<div class="card-body">
    <h5 class="card-title">Nome do produto</h5>
    <div class="stars">
        <img src="images/card/starFull.svg" alt="">
        <img src="images/card/starFull.svg" alt="">
        <img src="images/card/star.svg" alt="">
        <img src="images/card/star.svg" alt="">
        <img src="images/card/star.svg" alt="">
    </div>
    <p class="card-text price">Preço</p>
    <p class="card-text subPrice">installments</p>
    <a href="#" class="comprar btn btn-primary">Comprar</a>
</div>
</div> */}