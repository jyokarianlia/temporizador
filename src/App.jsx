import { useState } from 'react'

import './App.css'
import Cronometro from './Cronometro'
import Temporizador from './Temporizador'

function App() {

  const [ seleccion , setSeleccion ] = useState( '' )

  return (
    <div className="App">
      <div className="menu">
        <label onClick={ () => setSeleccion( 'crono' ) }>Cronometro</label>
        <label onClick={ () => setSeleccion( 'tempo' ) }>Temporizador</label>
      </div>
      { seleccion == 'crono' && <Cronometro /> }
      { seleccion == 'tempo' && <Temporizador /> }
    </div>
  )
}

export default App
