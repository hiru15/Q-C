import Layout from '@Layout/mainLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import capitalizeFirstLetter from '@utils/capitalizeFirstLetter';
import dynamic from 'next/dynamic';
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const Breadcrumbs = dynamic(()=>import('@components/Breadcrumb/index'));
const Servicio = () => {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
        <Breadcrumbs 
        section={'servicios'}
        currentPage={capitalizeFirstLetter(name?.replaceAll('-', ' '))}
        />
        <section>
            <div className="container containerInfo">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-8">
                        <span>{capitalizeFirstLetter(name?.replaceAll('-', ' '))}</span>
                        <h3>
                            <p>Disminuyen en más de un 90% las juntas en un centro de distribución, están diseñados para soportar operaciones de la más alta intensidad de tránsito y presentan mayor durabilidad.</p>
                        </h3>
                        <article>
                            <p>Los pisos de retracción compensada se construyen en paños de hasta 1.700 m2 sin cortes. Están diseñados para soportar operaciones de las más altas intensidades y presentan mayor resistencia al desgaste que pisos de hormigón convencional, soportando de mejor manera el alto tránsito de grúas y transpaletas.</p>
                        </article>
                        <div className="boxBeneficios">
                            <div className="text-xs-center">
                                <img src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/icon-ben.png"></img>
                            </div>
                            <span>Beneficios</span>
                            <div className="row">
                                <ul>
                                    <li>Superficie sin cortes</li>
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
                    <div className="col-sm-12 col-md-6 col-lg-4 gallery-int">
                        <div id="panel" className="panel">
                            <a>
                                <img
                                src="https://www.katemu.com/wp-content/uploads/2019/06/detalle.jpg">
                                </img>
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

Servicio.Layout = Layout;

export default Servicio;