import Layout from '@Layout/mainLayout';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const BannerImg = dynamic(()=>import('@components/BannerImg/index'));
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const Proyectos = () => {

    const Proyectos = [{
        img: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
        title: 'Edificación',
        ubication: 'Location',
        href: 'edificacion'
    },
    {
        img: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
        title: 'Edificación',
        ubication: 'Location',
        href: 'edificacion'
    }]

    return (
        <>
        <BannerImg
            urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-proyect-top.jpg'}
            title={'Proyectos'}
        />
        <section>
            <div className="container proyect_first">
                <div className="row containerBoxes">
                    <div className="col-lg-6">
                        <span>Proyectos desarrollados por {'Q&C Revestimientos'}</span>
                        <h3>Conoce nuestros proyectos</h3>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="banner-text">
                            <p>
                            Ofrecemos soluciones tecnológicas para todo tipo de proyectos. Nuestro objetivo es dar un soporte integral, proponiendo, diseñando y ejecutando trabajos de la más alta calidad y siempre con tecnología de vanguardia. Estamos en una búsqueda permanente de nuevos productos y procesos para mejorar el servicio a nuestros clientes y ofrecer soluciones a la medida de cada proyecto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container proyect_second">
                <div className="row">
                    <div className="col-12">
                        <div className="boxService containerBoxes">
                            <div className="row">
                                {Proyectos.map((proyect)=>{
                                    return (
                                        <div className="col-12 col-sm-12 col-lg-6">
                                            <Link
                                            href={`proyectos/${proyect.href}`}>
                                                <div className="descriptionBox">
                                                    <div className="hover-proyect-img">
                                                        <a>
                                                            <img
                                                            src={proyect.img}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="description row">
                                                        <a className="col-9 col-lg-10">
                                                            <p>{proyect.title}</p>
                                                            <span className="locacion">{proyect.ubication}</span>
                                                        </a>
                                                        <div className="col-3 col-lg-2">
                                                            <img
                                                            src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/arrow-box.png">
                                                            </img>
                                                        </div>
                                                    </div>
                                                </div>
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

Proyectos.Layout = Layout;

export default Proyectos;