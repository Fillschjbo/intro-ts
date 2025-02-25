interface Cart{
    id:number;
    quantity:number;
}

let cart : Cart[] = [
    {id:1, quantity:1},
    {id:2, quantity: 3},
    {id:3, quantity: 1},
]

function addToCart(id:number){
    let changed = false
    cart = cart.map((item)=>{
        if(item.id === id){
            item.quantity++;
            changed = true;
        }
        return item;
    })
    if(changed === false){
        cart.push({id: id, quantity: 1})
    }
}

function removeFromCart(id:number){
    cart = cart.map((item)=>{
        if(item.id === id){
            item.quantity--;
        }
        return item;
    })
    cart = cart.filter((item)=> item.quantity > 0);
}

addToCart(4)
removeFromCart(1)
console.log(cart)