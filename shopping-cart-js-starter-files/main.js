let shop = document.getElementById('shop');

const shopItemsData = [
    {id: 1, name:"Casual Shirt", price: 45, desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", img: "images/img-1.jpg"},
    {id: 2, name:"Office Shirt", price: 100, desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", img: "images/img-2.jpg"},
    {id: 3, name:"T-Shirt", price: 25, desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", img: "images/img-3.jpg"},
    {id: 4, name:"Man's Shoot", price: 300, desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", img: "images/img-4.jpg"},
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((value)=>{
        let {id,name,price,desc,img} = value;
        return `<div id="product-id-${id}" class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">0</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`;
    }).join(''));
}

generateShop();

let increment = (id) => {
    let search = basket.find((value) => value.id === id);
    // console.log(search);
    if(search === undefined){
        basket.push({id: id, item: 1});
    }else{
        search.item += 1;
    }
    console.log(basket);
    update();
}

let decrement = (id) => {
    let search = basket.find((value) => value.id === id);
    if(search.item === 0){
        return;
    } else{
        search.item -= 1;
    }
    console.log(basket);
    update();
}

let update = () => {
    console.log("The update function is running");
}