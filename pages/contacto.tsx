import Layout from '@Layout/mainLayout';
import dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import YupValidationResolver from '@utils/YupValidationResolver'
const BannerImg = dynamic(()=>import('@components/BannerImg/index'));
const OwnClients = dynamic(()=>import('@components/OwnClients/index'));
const validationSchema = yup.object().shape({
first_name: yup.string().min(3, 'No cumple con los carácteres mínimos (3)').required('Este campo es requerido'),
last_name: yup.string().min(3, 'No cumple con los carácteres mínimos (3)').required('Este campo es requerido'),
email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Formato de email incorrecto').required('Este campo es requerido'),
phone: yup.string().min(8, 'No cumple con los carácteres mínimos (8)').max(8).required('Este campo es requerido'),
mcuadrados: yup.number().required('Este campo es requerido'),
region: yup.string().required('Este campo es requerido'),
asunto: yup.string().required('Este campo es requerido'),
comentario: yup.string().required('Este campo es requerido'),
});

const Contacto = ({}) => {

    const resolver = YupValidationResolver(validationSchema)
    const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver });
    const onSubmit = data => console.log(data);

    return (
        <>
        <BannerImg
            urlImage={'https://www.katemu.com/wp-content/uploads/2020/01/bg-contact-top.jpg'}
            title={'Contacto'}
        />
        <section>
            <div className="container contact_first">
                <div className="row mb-4 containerBoxes">
                    <div className="col-lg-6 no-padding">
                        <span>Contáctanos</span>
                        <h3>Y danos la oportunidad de apoyarte con tu próximo proyecto.</h3>
                        <article>
                            <p>Contáctanos y danos la oportunidad de apoyarte con tu próximo proyecto. Envíanos tus datos y un representante te contactara para entregarte la mejor asesoría adaptada a tu necesidad.</p>
                            <br />
                            <strong>Descubre la calidad y durabilidad de los pisos Katemu</strong>
                        </article>
                        <div className="boxDatos">
                            <span>Datos de contacto</span>
                            <div className="row">
                                <div className="col-4 col-lg-4 text-center">
                                    <span>Dirección</span>
                                    <p>Camino de la Colina 1455, Huechuraba, Santiago, Chile</p>
                                </div>
                                <div className="col-4 col-lg-4 text-center">
                                    <span>Teléfono</span>
                                    <p>+562 27344069</p>
                                </div>
                                <div className="col-4 col-lg-4 text-center">
                                    <span>Correo Electrónico</span>
                                    <p>epincheira@qyc.cl </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 form-bg">
                        <form className="formContacto" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <span className="col-lg-12">
                                Contactenos:
                                </span>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Nombres</label>
                                    <input
                                    className="form-control"
                                    {...register("first_name")}
                                    type="text"
                                    placeholder="Ej: Rodrigo Alejandro"
                                    />
                                    {errors.first_name && (
                                        <span>{errors.message}</span>
                                    )}
                                </div>
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Apellidos</label>
                                    <input 
                                    className="form-control"
                                    {...register("last_name")}
                                    type="text"
                                    placeholder="Ej: Hernandez Gonzales"
                                    />
                                </div>
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Correo Eléctronico</label>
                                    <input 
                                    className="form-control"
                                    {...register("email")}
                                    type="text"
                                    placeholder="Ej: nombre@correo.cl"
                                    />
                                </div>
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Teléfono</label>
                                    <input 
                                    className="form-control"
                                    {...register("phone")}
                                    type="text"
                                    placeholder="Ej: 987654321"
                                    />
                                </div>
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Metros Cuadrados</label>
                                    <select
                                    className="form-control"
                                    {...register("mcuadrados")}
                                    >
                                        <option selected>{'--'}</option>
                                        <option>Menos de 5.000 M2</option>
                                        <option>Entre 5.000 M2 a 15.000 M2</option>
                                        <option>Mayor de 15.001 M2</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-12 col-md-6">
                                    <label>Región</label>
                                    <select
                                    className="form-control"
                                     {...register("region")}
                                    >
                                        <option selected>{'--'}</option>
                                        <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                                        <option value="I Región de Tarapacá">I Región de Tarapacá</option>
                                        <option value="II Región de Antofagasta">II Región de Antofagasta</option>
                                        <option value="III Región de Atacama">III Región de Atacama</option>
                                        <option value="IV Región de Coquimbo">IV Región de Coquimbo</option>
                                        <option value="V Región de Valparaíso">V Región de Valparaíso</option>
                                        <option value="VI Región del Libertador General Bernardo O’Higgins">VI Región del Libertador General Bernardo O’Higgins</option>
                                        <option value="VII Región del Maule">VII Región del Maule</option>
                                        <option value="VIII Región del Biobío">VIII Región del Biobío</option>
                                        <option value="IX Región de La Araucanía">IX Región de La Araucanía</option>
                                        <option value="X Región de Los Lagos">X Región de Los Lagos</option>
                                        <option value="XI Región Aysén del General Carlos Ibáñez del Campo">XI Región Aysén del General Carlos Ibáñez del Campo</option>
                                        <option value="XII Región de Magallanes y Antártica Chilena">XII Región de Magallanes y Antártica Chilena</option>
                                        <option value="XIV Región de Los Ríos">XIV Región de Los Ríos</option>
                                        <option value="XV Región de Arica y Parinacota">XV Región de Arica y Parinacota</option>
                                        <option value="XVI Región de Ñuble">XVI Región de Ñuble</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Asunto</label>
                                    <select 
                                    className="form-control"
                                    {...register("asunto")}
                                    >
                                        <option selected>{'--'}</option>
                                        <option value="Mantención y Reparación">Mantención y Reparación</option>
                                        <option value="Mediciones">Mediciones</option>
                                        <option value="Pisos y Pavimentos comerciales / decorativos">Pisos y Pavimentos comerciales / decorativos</option>
                                        <option value="Pisos y Pavimentos Industriales">Pisos y Pavimentos Industriales</option>
                                        <option value="Revestimientos / tratamientos superficiales">Revestimientos / tratamientos superficiales</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Comentario</label>
                                    <textarea
                                    style={{ height: '200px' }}
                                    className="form-control"
                                    {...register("comentario")}
                                    placeholder="Comentario"
                                    ></textarea>
                                </div>
                                <div className="text-centrado">
                                    <button type="submit" className="btn-gris">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 mt-5">
                        <h3>Nuestra Ubicación</h3>
                        <iframe 
                            width="100%" 
                            height="340" 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1593.0823837337054!2d-73.15955713501306!3d-37.0058653965143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669c6b876995773%3A0x4807f1885e229a59!2sQyC+Quimicos+y+Complementos.!5e0!3m2!1ses-419!2scl!4v1520200792272" 
                            frameBorder={0} 
                            allowFullScreen={false} 
                            style={{border: '0px', borderImage: 'none', pointerEvents: 'none'}}
                        />
                    </div>
                </div>
            </div>
        </section>
        <OwnClients />
        </>
    )
}

Contacto.Layout = Layout;

export default Contacto;