

const Container = () => {
    return (
        <div>
            <div className="container__publicity" >
                <div className="container__publicity--content">
                    <img className="container__publicity--content__img" src="../img/packjoyeria.png" alt="" />
                    <p className="container__publicity--content__text">
                        Cada una de nuestras joyas llevan nuestra esencia, belleza y estilo sofisticado.
                    </p>
                </div>

                <div className="container__publicity--content">
                    <div className="container__publicity--content__secondary">
                        <p className="container__publicity--content__secondary__text" >¡Di adiós a las manchas este verano!</p>
                        <img className="container__publicity--content__secondary__img" src="../img/packtratamiento.png" alt="" />
                    </div>

                    <div className="container__publicity--content__secondary">
                        <img className="container__publicity--content__secondary__img" src="../img/packmaquillaje.png" alt="" />
                        <p className="container__publicity--content__secondary__text">
                            Disfruta tu belleza con ingredientes naturales y texturas únicas.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Container