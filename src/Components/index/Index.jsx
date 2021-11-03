import React from 'react'
import { ItemListContainer } from '../ItemListContainter/ItemListContainer'
import './index.scss'

export const Index = () => {
    return (
        <div className='containerIdex'>
            <h1>LIDHERMA</h1>
            <h2>Lidherma es una empresa argentina que desarrolla productos cosméticos con respaldo científico. Desde sus inicios, en 1989, se transformó en la mano derecha de los profesionales de la estética –dermatólogos, cirujanos, esteticistas, kinesiólogos, cosmiatras, cosmetólogos, centros de estética y spa–, acompañándolos en su crecimiento profesional.</h2>

            <ItemListContainer/>
        </div>
    )
}
