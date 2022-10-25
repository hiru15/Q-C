import Layout from '@Layout/mainLayout';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const BannerImg = dynamic(()=>import('@components/BannerImg/index'));
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const Servicios = () => {

    const Service = [{
        title: 'REVESTIMIENTOS DE PISOS',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/1.-REVESTIMIENTOS-DE-PISOS-2.jpg',
        url: 'revestimientos-de-pisos'
    },{
        title: 'PULIDO SUPERFLOOR O TIPO ESPEJO',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/2.-PULIDO-SUPERFLOOR-O-TIPO-ESPEJO-2.jpg',
        url: 'pulido-superfloor-o-tipo-espejo'
    },{
        title: 'APLICACIÓN DE MORTEROS',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/3.-APLICACION-DE-MORTEROS-2.jpg',
        url: ''
    },{
        title: 'REPARACIÓN DE GRIETAS Y JUNTAS',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/4.-REPARACION-DE-GRIETAS-Y-JUNTAS-2.jpg',
        url: ''
    },{
        title: 'GRANALLADO',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/5.-GRANALLADO-2.jpg',
        url: ''
    },{
        title: 'DEMARCACIONES Y SEÑALIZACIONES',
        image: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/7.-DEMARCACIONES-Y-SE%c3%91ALIZACIONES-2.jpg',
        url: ''
    }]

    return (
        <>
        <BannerImg
            urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-services-top.jpg'}
            title={'Servicios'}
        />
        <section>
            <div className="container services_first">
                <div className="row mb-4 containerBoxes">
                    <div className="col-12 col-lg-6">
                        <span>Una Completa Gama de servicios</span>
                        <h3>Para resolver las necesidades propias de cada proyecto.</h3>
                    </div>
                    <div className="d-none d-lg-block col-lg-6">
                        <div className="banner-text">
                            <p>
                            Hemos incorporado las diferentes especialidades a nuestra empresa para poder entregar a nuestros clientes un servicio integral al momento de enfrentar un proyecto. Diseñamos, construimos, reparamos y medimos objetivamente cada trabajo para garantizar resultados tanto en proyectos propios como de terceros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container services_second">
                <div className="row">
                    <div className="col-12">
                        <div className="boxService containerBoxes">
                            <div className="row">
                              {Service.map((service) => {
                                  return (
                                    <div className="descriptionBox col-12 col-sm-6 col-lg-4">
                                        <Link
                                        href={`/servicios/${service.url}`}>
                                            <a className="containerOrangeBox">
                                                <div className="block-image">
                                                    <img
                                                    className="service-img"
                                                    src={service.image}></img>
                                                </div>
                                                <div className="orangeBox row">
                                                    <div className="col-8 col-lg-9">
                                                        <h3>{service.title}</h3>
                                                    </div>
                                                    <div className="col-4 col-lg-3">
                                                        <img
                                                        src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/arrow-box.png">
                                                        </img>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>    
                                  )
                              })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <OwnClients />
        </>
    )

}

Servicios.Layout = Layout;

export default Servicios; 