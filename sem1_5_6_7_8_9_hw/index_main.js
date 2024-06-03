const featuredItems = JSON.parse(data);
console.log(featuredItems);


const cells = document.querySelector('.cells');

featuredItems.forEach(element => {
    cells.insertAdjacentHTML('beforeend', `
    <div class="block">
    <a href="#">
    <img src="${element.image}" alt="1">
    <p class="title">${element.title}</p>
    <p class="about">${element.about}</p>
    <p class="price">${element.price}</p>
    </a>
    </div>
    `)
});


const blocks = cells.childNodes;
console.log(blocks);
const cart = document.querySelector('.cart_panels');



blocks.forEach(element => {
    element.addEventListener('click', () => {
        cart.insertAdjacentHTML('beforeend', `
        <div class="cart_panel1">
        <div class="cart_panelImage"><img class="cart_image" src="img/3.png" alt=""></div>
        <div class="cart_panelInfo">
            <div class="cart_name">MANGO  PEOPLE <br>  T-SHIRT</div>
            <div class="cart_info">
                <div>Price: <span class="cart_price">$300</span></div>
                <div>Color: Red</div>
                <div>Size: Xl</div>
                <div class="cart_quantity">
                    <div>Quantity:</div>
                    <div class="cart_amount">2</div>
                </div>
            </div>
        </div>
        <a href="#" class="cart_panelCancel"><img src="img/Vector_Cancel.png" alt=""></a>
    </div>
        `)
    })
});

const cart_goods = cart.childNodes;
console.log(cart_goods);







