export default function NestedLayout({
    children
}:{
    children : React.ReactNode
}){
    return(
        <html>
            <body>
                {children}
                <h2>Nested layput of loginnn</h2>
            </body>
        </html>
    )
}