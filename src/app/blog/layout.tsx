export default function BlogLayout({
    children,
}:{
    children : React.ReactNode
}){
    return(
        <html>

            {children}
            <h2 style={{border : "2px solid red"}}>blog own layout</h2>

        </html>
    )
}