import React from 'react'
import { StyledJumbo } from "../styles/components"
import {Image} from "./"

export default function Jumbo() {
    return (
        <StyledJumbo>
        <div>
            <h2>Consigue el mejor swag exclusivo y especial de platzi!</h2>
            <small>Exclusivo para los mejores estudiantes</small>
        </div>
        <Image name="icon"/>
        </StyledJumbo>
    )
}
