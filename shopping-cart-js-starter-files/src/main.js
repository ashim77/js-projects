let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((value)=>{
        let {id,name,price,desc,img} = value;
        let search = basket.find((value)=> value.id === id) || [];
        return `<div id="product-id-${id}" class="item">
        <img width="220" src="${img}" alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">${search.item === undefined ? 0 : search.item}</div>
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
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {
    let search = basket.find((value) => value.id === id);
    if(search === undefined){
        return;
    }
    if(search.item === 0){
        return;
    } else{
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((value)=> value.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
}

let update = (id) => {
    let search = basket.find((value)=> value.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation()
}


let calculation = () => {
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((value)=>value.item).reduce((total,value)=>total+value,0);
}

calculation();