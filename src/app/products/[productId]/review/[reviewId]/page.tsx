export default function Review({params}: {params : {reviewId : string, productId : string}}){
    return <h1>This is review of product {params.productId} and review id is  {params.reviewId}</h1>
}