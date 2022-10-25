const DescriptionQC = () => {

    const boxes = [
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Experiencia',
            description: 'Desde 2005 construimos pisos y pavimentos de hormigón, buscando de manera permanente introducir las últimas tecnologías y mejorar las prácticas para lograr soluciones de la más alta calidad.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Diseño a la medida',
            description: 'Diseñamos a la medida de cada proyecto. Buscamos la mejor relación costo/ eficiencia para su operación.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Asesoría',
            description: 'El cliente esta al centro de nuestra estrategia y es por eso que lo asesoramos técnicamente y lo acompañamos durante todo su viaje, con el fin de hacer sus proyectos mas eficientes.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Solidez Técnica',
            description: 'Contamos con el conocimiento técnico de lo que pasa en Chile y el mundo. Tenemos una gran capacidad para resolver las dudas de nuestros clientes, estamos en constante búsqueda de soluciones para ellos.'
        }
    ]

    return (
        <section>
            <div className="container descriptionQC">
              <div className="pleft">
                <span>Por qué eleguir {'Q&C'}</span>
                <div className="row mb-4">
                    <div className="col-12 col-lg-6">
                        <h2>
                            Innovación y tecnología en pavimentos y pisos industriales
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-md-block d-lg-block">
                        <p>
                            Ofreciendo servicios en el mercado chileno durante más 10 años, contamos con personal altamente capacitado para ofrecer soluciones innovadoras en revestimientos de pisos y reparaciones de superficies, contando con la confianza de 35 clientes y más de 100.000 M2 ejecutados. Somos experiencia, calidad y responsabilidad. Somos la solución en revestimientos.
                        </p>
                    </div>
                </div>
              </div>
              <div className="containerBoxes">
                <div className="row">
                  { boxes.map( (box) => {
                      return (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 descriptionBox">
                            <img
                            src={box.image}
                            />
                            <a className="orangeBox row">
                                <div className="col-11 col-lg-11">
                                    <h3>{box.title}</h3>
                                    <div className="limitado">
                                        <p>{box.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                      )
                  })}
                </div>
              </div>
              <div className="text-center" style={{ clear: 'both', margin: '0 auto'}}>
                <a className="btn-gris">Te invitamos a conocernos</a>
              </div>
            </div>
        </section>
    )
}

export default DescriptionQC;