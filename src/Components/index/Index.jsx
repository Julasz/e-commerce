import ItemListContainer from '../ItemListContainter/ItemListContainer'
import './index.scss'
import Zoom from 'react-reveal/Zoom'
import Reveal from 'react-reveal/Reveal'

export const Index = () => {
    return (
        <div className='containerIdex'>
            <Zoom left cascade>
                <h1>LIDHERMA</h1>
            </Zoom>
            <Reveal effect="fadeInUp">
                <h2>Lidherma es una empresa argentina que desarrolla productos cosméticos con respaldo científico. Desde sus inicios, en 1989, se transformó en la mano derecha de los profesionales de la estética –dermatólogos, cirujanos, esteticistas, kinesiólogos, cosmiatras, cosmetólogos, centros de estética y spa–, acompañándolos en su crecimiento profesional.</h2>
            </Reveal>
            <ItemListContainer/>
        </div>
    )
}
