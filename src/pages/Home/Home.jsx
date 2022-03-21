import React from 'react'

export const Home = ({usuario, otroDato, cosa}) => {
    return (
        <>
            <h1>Bienvenido {usuario.fullName}</h1>
            {/* <h2>hola {otroDato} y {cosa}</h2> */}
        </>
    )
}
