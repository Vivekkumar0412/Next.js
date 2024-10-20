// export default function productI({params}){
//     return <h1>Hi i am product details page {params.productId}</h1>
// }

export default function productDetails({params}:{params : {productId : string}}){
    return <h1>Product number is {params.productId}</h1>
}