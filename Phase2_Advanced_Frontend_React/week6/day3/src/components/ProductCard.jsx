import React from 'react'

// function ProductCard(props) {
//   return (
//     <div>
//         <h1>{props.title}</h1>
//         <p>{props.price}</p>
//     </div>
//   )
// }

// we can also destructe props and use them

function ProductCard({title, price}){
    // we should never modify props inside components
    // title="new TItile"
    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard