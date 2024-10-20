// export default function SlugData({params}: {params : {slug : string[]}}){
//     if(params.slug?.length == 2){
//         return <h1>first route value {params.slug[0]} second route value {params.slug[1]}</h1>
//     }else if(params.slug?.length == 1){
//         return <h1>{params.slug[0]}</h1>
//     }else{
//         return(
//             <>
//                 {params.slug && params.slug?.length > 0 && (
//                     <ol>
//                         {params.slug.map((e)=>(
//                             <h1>{e}</h1>
//                         ))}
//                     </ol>
//                 )}
//             </>
//         )
//     }
// }

export default function SlugPage({params}: {params : {slug : string[]}}){
    if(params.slug?.length == 1){
        return <h1>{params.slug[0]}</h1>
    }
    else if(params.slug && params.slug?.length > 1){
        return(
            <>
                {params.slug.map((e)=>(
                    <h1>{e}</h1>
                ))}
            </>
        )
    }

    return <h1>main docs page</h1>
}