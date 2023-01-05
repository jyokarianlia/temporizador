import { useState } from 'react'
import reloj from './assets/cronometro.png'
import './css/temporizador.css'

const Temporizador = () => {

    const [ hr , setHr ] = useState('00')
    const [ min , setMin ] = useState('00')
    const [ seg , setSeg ] = useState('00')

    return (
        <div className='container'>
            <div className="temporizador">
                <div className="contentDatos">
                    <label htmlFor="">{ hr }</label>
                    <label htmlFor="">:</label>
                    <label htmlFor="">{ min }</label>
                    <label htmlFor="">:</label>
                    <label htmlFor="">{ seg }</label>
                </div>
            </div>
            <div className="config">
                <div className="tiempo">
                    <div>
                        <label htmlFor="hr">Horas</label>
                        <input type="text" name="hr" id="hr" placeholder='00' maxLength='2'  onChange={ e => setHr(e.target.value) }/>
                    </div>
                    <div>
                        <label htmlFor="min">Minutos</label>
                        <input type="text" name="hr" id="min" placeholder='00' maxLength='2'  onChange={ e => setMin(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="seg">Segundos</label>
                        <input type="number" name="seg" id="seg" placeholder='00'  maxLength='2'  onChange={ e => setSeg(e.target.value) } />
                    </div>
                </div>
                <div className="controles">
                    <button>Iniciar</button>
                    <button>Pausar</button>
                    <button>Detener</button>
                </div>
            </div>
        </div>
    )
}

export default Temporizador