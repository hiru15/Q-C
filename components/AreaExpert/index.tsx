const AreaExpert = () => {


    const area = [
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-Industriales-1.svg',
            title: 'Pavimentos Industriales'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-comerciales-decorativos.svg',
            title: 'Pisos Comerciales y Decorativos'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Revestimientos-tratamientos-superficiales.svg',
            title: 'Revestimiento para pisos'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Agroindustria.svg',
            title: 'Mantención y reparación'
        }
    ]

    return (
        <section>
            <div className="container contenido-boxes">
                <div className="text-center mt-5">
                    <h2>Áreas donde somos expertos</h2>
                </div>    
                <div className="row">
                    {area.map((expert) => (
                        <a className="col-6 col-lg-3 boxOrange d-flex flex-column justify-content-center">
                            <img 
                            src={expert.image}
                            />
                            <p>{expert.title}</p>
                        </a>
                    ))}                    
                </div>            
            </div>
        </section>
    )
}

export default AreaExpert;