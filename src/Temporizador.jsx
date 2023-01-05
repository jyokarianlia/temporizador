import reloj from './assets/cronometro.png'
import './css/temporizador.css'

const Temporizador = () => {
    return (
        <div className='container'>
            <div className="temporizador">
                <div className="contentDatos">
                    <label htmlFor="">00</label>
                    <label htmlFor="">:</label>
                    <label htmlFor="">00</label>
                    <label htmlFor="">:</label>
                    <label htmlFor="">00</label>
                </div>
            </div>
            <div className="config"></div>
        </div>
    )
}

export default Temporizador