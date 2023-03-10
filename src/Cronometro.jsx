import "./css/cronometro.css";
const Cronometro = () => {

    return (
        <div>
            <h2>Cronometro</h2>
            <section className="main">
                <div className="cuadro">
                    <div className="cuadro__num h">00</div>
                    <div className="cuadro__dhms"><span>HOURS</span></div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num m">00</div>
                    <div className="cuadro__dhms"><span>MINUTES</span></div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num s">00</div>
                    <div className="cuadro__dhms"><span>SECONDS</span></div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num ms">00</div>
                    <div className="cuadro__dhms"><span>MILISECONDS</span></div>
                </div>
            </section>
            <section className="actions-btns">
                <button className="ini">INICIAR</button>
                <button className="det">DETENER</button>
                <button className="rei">REINICIAR</button>
            </section>
        </div>
    )
}

export default Cronometro