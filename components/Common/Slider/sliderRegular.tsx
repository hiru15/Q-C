import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@components/Common/Image';

interface Slider {
  banners: Array<any>;
}

const SliderRegular = ({ banners }: Slider) => {

  return (
    <div
      className="home-slider margin-bottom-0 marginTopHeader"
      id="home-slider"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
      >
        {banners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
                <Image
                  width={2564}
                  alt="CoverPageLive"
                  src={banner.image.web}
                  layout="intrinsic"
                  aspectRatio={'3:1'}
                  priority={index === 0}
                />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderRegular;
