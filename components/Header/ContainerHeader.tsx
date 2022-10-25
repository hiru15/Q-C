import dynamic from 'next/dynamic';
const NavDesktop = dynamic(() => import('@components/Header/NavDesktop'));

const ContainerHeader = () => {
  return (
    <NavDesktop
    />
  );
};

export default ContainerHeader;
