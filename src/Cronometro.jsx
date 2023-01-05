import "./css/cronometro.css";
const Cronometro = () => {

    return (
        <div>
            <h2>Cronometro</h2>
            <section>
                <div className="cuadro">
                    <div className="cuadro__num">00</div>
                    <div className="cuadro__dhms">DAYS</div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num">00</div>
                    <div className="cuadro__dhms">HOURS</div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num">00</div>
                    <div className="cuadro__dhms">MINUTES</div>
                </div>
                <div className="cuadro">
                    <div className="cuadro__num">00</div>
                    <div className="cuadro__dhms">SECONDS</div>
                </div>
            </section>
        </div>
    )
}

export default Cronometro