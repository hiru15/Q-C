import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@components/Common/Image';

const AllProyects = () => {

    const banners = [
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        }
    ]

    return (
        <section style={{ backgroundColor: '#f1f1f1'}}>
            <div className="container descriptionQC">
              <div className="pleft">
                <span>Proyectos</span>
                <div className="row mb-4">
                    <div className="col-12 col-lg-6">
                        <h2>
                         Proyectos destacados {'Q&C'}
                        </h2>
                    </div>
                    <div className="col-12 col-lg-6 d-none d-md-block d-lg-block">
                        <p>
                            Trabajamos de manera integrada desde el diseño del proyecto, nuestra ejecución es cuidadosamente planificada, tiene una alta orientación a los detalles y se basa en los mejores procedimientos, maquinarias y herramientas disponibles en el mercado internacional.
                        </p>
                    </div>
                </div>
              </div>
              <div className="containerBoxes">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            loop={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true, hide: true }}
                            breakpoints={{
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                  },
                        }}
                        >
                            {banners.map((banner, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Image
                                    width={2564}
                                    alt="CoverPageLive"
                                    src={banner.image.web}
                                    layout="intrinsic"
                                    aspectRatio={'1:1'}
                                    priority={index === 0}
                                    />
                                </SwiperSlide>
                            );
                            })}
                        </Swiper>
                    </div>
                </div>
              </div>
              <div className="text-center">
                <a className="btn-gris">Te invitamos a conocernos</a>
              </div>
            </div>
        </section>
    )
}

export default AllProyects;