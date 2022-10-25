import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@components/Common/Image';

const OwnClients = () => {

    const banners = [
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-5-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-3-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-3-2.jpg'
            }
        }
    ]

    return (
        <section>
          <div className="trustQC">
            <div className="container">
                <p className="text-center">Ellos han confiado en {'Q&C'}</p>
                <div className="content-fluid">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        loop={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true, hide: true }}
                        breakpoints={{
                            992: {
                                slidesPerView: 5,
                                spaceBetween: 10,
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
        </section>
    )
}

export default OwnClients;