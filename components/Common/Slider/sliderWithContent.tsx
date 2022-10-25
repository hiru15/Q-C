import { Image } from '@components/Common/Image';
import { sanitizeURL } from '@utils/sanitizeURL';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Slider {
  banners: Array<string>;
  country: string;
}

const SliderWithContent = ({ banners, country }: Slider) => {
  const { t } = useTranslation('common');

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
              <div className="item">
                <div className="only-desktop">
                  <Image
                    width={2564}
                    alt="CoverPageLive"
                    src={banner.image.web}
                    layout="intrinsic"
                    aspectRatio={'3:1'}
                    priority={index === 0}
                  />
                </div>
                <div className="only-mobile">
                  <Image
                    width={904}
                    alt="CoverPageLive"
                    src={banner.image.mobile}
                    layout="intrinsic"
                    aspectRatio={'1:1'}
                    priority={index === 0}
                  />
                </div>
                <div className="captionSlider">
                  {banner?.title !== '' && (
                    <span className="sizeTextSubTittle">
                      {t(`componentes.Home.Slider.${banner.title}`)}
                    </span>
                  )}
                  {banner?.text !== '' && (
                    <span className="sizeTextTittle">
                      {t(`componentes.Home.Slider.${banner.text}`)}
                    </span>
                  )}
                  {banner.buttons.map((button, index) => {
                    if (
                      button.href.startsWith('http') ||
                      button.href.startsWith('https')
                    ) {
                      return (
                        <button
                          style={{ marginTop: '10px' }}
                          key={index}
                          onClick={() => {
                            window.open(button.href, '_blank');
                          }}
                          formTarget={button.target}
                          pill-primary={
                            button.class === 'primary' ? 'true' : null
                          }
                          pill-secondary={
                            button.class === 'secondary' ? 'true' : null
                          }
                        >
                          {t(`componentes.Home.Slider.${button.text}`)}
                        </button>
                      );
                    }
                    return (
                      <Link
                        href={`${country}/${sanitizeURL(button.href)}`}
                        key={index}
                      >
                        <button
                          style={{ marginTop: '10px', cursor: 'pointer' }}
                          formTarget={button.target}
                          pill-primary={
                            button.class === 'primary' ? 'true' : null
                          }
                          pill-secondary={
                            button.class === 'secondary' ? 'true' : null
                          }
                        >
                          {t(`componentes.Home.Slider.${button.text}`)}
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderWithContent;
