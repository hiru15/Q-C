import Layout from '@Layout/mainLayout';
import dynamic from 'next/dynamic';
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const BannerImg = dynamic(()=>import('@components/BannerImg/index'));
const Empresa = () => {

    return (
        <>
        <BannerImg
            urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-about-us-top.jpg'}
            title={'Empresa'}
        />
        <section>
            <div className="container about_us_first_container">
                <div className="row mb-4 containerBoxes">
                    <div className="col-lg-8 mb-5">
                        <span>Nuestro compromiso con la calidad</span>
                        <h3>Nos hace hoy día la empresa líder en pisos de hormigón en Chile</h3>
                        <article>
                            <p>Desde 2004 construimos pisos y pavimentos de hormigón, buscando de manera permanente introducir las últimas tecnologías y mejorar las prácticas para lograr soluciones de la más alta calidad.</p>
                            <p>Comenzamos construyendo pavimentos estampados con fines decorativos para uso domiciliario y grandes proyectos comerciales. Así logramos posicionarnos dentro del rubro de la construcción e identificar otras áreas de trabajo como los pavimentos de tránsito pesado y pisos industriales.</p>
                            <p>En 2010 logramos una alianza estratégica con The Fricks Company, empresa líder en pisos industriales en EEUU con más de 30 años de experiencia y una gran reputación de calidad. Por medio de esta alianza traemos a Chile los pisos de retracción compensada y las mejores prácticas en el diseño, planificación y construcción de pisos industriales, logrando ejecutar con éxito proyectos emblemáticos como los centros de distribución de Unimarc y Walmart.</p>
                            <p>Con el pasar de los años, nuestro equipo y nuestro conocimiento han ido creciendo, abarcando otras áreas de trabajo como revestimientos, pulidos, recuperación de pisos y reparaciones, logrando de esta manera entregar un servicio integral desde la concepción del proyecto hasta la mantención y post venta.</p>
                        </article>
                    </div>
                    <div className="col-lg-4 mb-5">
                        <img
                        src="https://www.katemu.com/wp-content/uploads/2020/04/katemu.jpg">
                        </img>
                    </div>
                    <div className="col-12 col-lg-6 boxVision mt-5">
                        <span>Visión</span>
                        <p>
                        Ser reconocidos como referentes en innovación, diseño y construcción de pisos industriales en Chile y el mundo.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 boxMision mt-5">
                        <span>Misión</span>
                        <p>
                        Diseñar y construir pisos y pavimentos con el mejor estándar y tecnología mundial. Nuestro sello, la solidez técnica, nuestro fin, la satisfacción del cliente
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <OwnClients />
        </>
    )
}

Empresa.Layout = Layout;

export default Empresa;