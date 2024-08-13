const shop = document.getElementById("shop")
console.log(shop)

let shopItemsData = [{
    id: "item_01",
    name: "Bikini Bottoms High ",
    price: 55,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolorum",
    img: "img/img-(1).jpg"
},
{   id: "item_02",
    name: "Women's Sexy Bikini Set Color",
    price: 65,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolorum",
    img: "img/img-(2).jpg"

},
{   id: "item_03",
    name: "2 Piece Bathing Suit Tie Side Swimsuit",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolorum",
    img: "img/img-(3).jpg"

},
{   id: "item_04",
    name: "geluboao Women",
    price: 95,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolorum",
    img: "img/img-(4).jpg"

}];

        /*
        ! adento de map debo hacer la declaracion de 
        ? let{id,name,price, desc, img }=x;  / esto para evitar
        ? repeticion de codigo cuando solicitos los datos del objeto
        ! por ejemplo  // <h3>${x.name}</h3> || <h3>$ ${x.price}</h3> funciona solo que es repetitivo
        ? asi ya no se escribe x nuevamente
       */
let basket = [{}];
let generateShop = () => {
    shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        return (`
            <div id="product-id-${id}" class="item">
                <img width="220" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h3>$ ${price}</h3>
                        <div class="buttons">
                            <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                            <div id="${id}" class="quantity">0</div>
                            <i onclick="increment('${id}')" class="bi bi-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }).join("");
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    

    basket.push({
        id: selectedItem.id,
        item:1, 
    })
    console.log(basket);
    // ! lógica para incrementar la cantidad
}

let decrement = (id) => {
    console.log(id);
    // ?decrementar la cantidad
}

let updateNumCart = () => {
    // ! actualizar el número en el cart
}