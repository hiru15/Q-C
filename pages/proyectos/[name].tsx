import Layout from '@Layout/mainLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';
import dynamic from 'next/dynamic';
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const Breadcrumbs = dynamic(()=>import('@components/Breadcrumb/index'));
const Proyecto = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
        <Breadcrumbs 
        section={'proyectos'}
        currentPage={capitalizeFirstLetter(name?.replaceAll('-', ' '))}
        />
        <section>
            <div className="container">
                <div className="row containerInfo">
                    <div className="col-12 col-lg-6">
                        <span>Santiago</span>
                        <h3>{capitalizeFirstLetter(name)}</h3>
                        <article>
                            <p>
                            Centro de distribución para nuestro cliente Walmart, CD el peñon, ubicado en la comuna de San Bernardo, construido de la mano de constructora Tecsa, Inspección tecnica Intexa y Arquitecto Uriarte y Asociados, cubre una superficie de 130.227,53 m2 de piso de Retracción Compensada. Pisos altamente resistentes al transito de maquinaria con ruedas duras y con altos niveles de planeidad para la distribucion y almacenaje en grandes alturas para la industria de retail.
                            </p>
                        </article>
                        <div className="boxBeneficios">
                            <div className="text-xs-center">
                                <img src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/icon-ben.png"></img>
                            </div>
                            <span>Información del Proyecto</span>
                            <div className="row">
                                <ul>
                                    <li>Constructora: Recta</li>
                                    <li>Mandante: Walmart</li>
                                    <li>Superficie Construida: 130.750</li>
                                    <li>Fecha de Inicio: nov-20</li>
                                    <li>Fecha de Termino: feb-21</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-xs-center">
                            <Link
                            href={`/contacto`}>
                                <a className="btn-gris">Solicitar una cotización</a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 gallery-int">
                        <div id="panel">
                            <a>
                                <img
                                src="https://www.katemu.com/wp-content/uploads/2020/02/2c697031-36c0-4ff3-aa50-8ca389695423.jpg"
                                />
                            </a>
                        </div>
                        <div id="imagenPequena-int" className="d-flex flex-row justify-content-between">
                            <div className="containerImagen">
                                <div className="cajaImg">
                                    <a>
                                        <img 
                                        src="https://www.katemu.com/wp-content/uploads/2019/06/detalle.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="containerImagen">
                                <div className="cajaImg">
                                    <a>
                                        <img 
                                        src="https://www.katemu.com/wp-content/uploads/2019/06/detalle.jpg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="containerImagen">
                                <div className="cajaImg">
                                    <a>
                                        <img 
                                        src="https://www.katemu.com/wp-content/uploads/2019/06/detalle.jpg"
                                        />
                                    </a>
                                </div>
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

Proyecto.Layout = Layout;

export default Proyecto;