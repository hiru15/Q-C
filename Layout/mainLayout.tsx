import ProgressBar from '@badrap/bar-of-progress';
import dynamic from 'next/dynamic';
import Router from 'next/router';
const ContainerHeader = dynamic(
  () => import('@components/Header/ContainerHeader')
);
const ContainerFooter = dynamic(
  () => import('@components/Footer/containerFooter')
);
const progress = new ProgressBar({
  size: 4,
  color: '#ffa800',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const Layout = ({ props, children }) => {
  return (
    <div>
      <ContainerHeader />
      {children}
      <ContainerFooter />
    </div>
  );
};

export default Layout;
