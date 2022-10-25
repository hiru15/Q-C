import '../styles/index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type { FC } from 'react';

const Noop: FC<any> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || Noop;
  
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>    
  )
}

export default MyApp
