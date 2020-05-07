import React from 'react'
import {SEO} from "../components"
import {Button, Purchase} from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
    return (
        <>
        <div>
            <SEO tittle="Compra Exitosa"/>
            <Purchase>
            <h2>Compra Exitosa</h2>
            <p>Espero que disfrutes tu swag, lucelo con exito</p>
            <p>Te esperamos de vuelta</p>
            <span role="img" aria-label="emoji">❤</span>
            <Link to="/">
                <Button>Volver al Catalogo</Button>
            </Link>
            </Purchase>
        </div>
        </>
    )
}
