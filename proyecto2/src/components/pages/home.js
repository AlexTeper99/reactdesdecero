const Home = () => (
    <div className="main-banner img-container dark-color">
        <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
                <img
                    className="main-banner__img"
                    src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="banner"
                />
                <div className="main-banner__data s-center">
                    <p className="s-mb-0 t2">Bienvenido a EdCupcakes</p>
                    <p>Un sitio lleno de sabores.</p>
                    <a className="button" href="/cupcakes">Cupcakes</a>
                </div>
            </div>
        </div>
    </div>
)

export default Home