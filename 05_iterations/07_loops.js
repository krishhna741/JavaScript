//reduce.......
const myNums =[1,2,3]
    //acc: accumulator, currval: current value.......

    // const myTotal = myNums.reduce(function (acc, currval) {
    //     console.log(`acc: ${acc} and currval: ${currval}`)
    //     return acc + currval;
    // }, 0)

const myTotal = myNums.reduce( (acc, currval) => (acc+currval),0)

    console.log(myTotal)

const shoppingcart =[
    {
        itemName:"js corce",
        price: 2999 
    },
    {
        itemName:"python",
        price: 999 
    },
    {
        itemName:"web dev",
        price: 2899 
    },
    {
        itemName:"Data scince",
        price: 3999 
    },
]

    const priceToPay = shoppingcart.reduce(( acc, item) => acc + item.price, 0)

    console.log(priceToPay);
    

