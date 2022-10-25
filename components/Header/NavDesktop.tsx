import {
  faEnvelopeSquare,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextImage from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '@components/Common/Logo';

const NavDesktop = ({}: any) => {

  const menuNavbar = [{
    id: 1,
    href: 'empresa',
    text: 'Empresa'
  },
  {
    id: 2,
    href: 'servicios',
    text: 'Servicios'
  },
  {
    id: 3,
    href: 'clientes',
    text: 'Clienntes'
  },
  {
    id: 4,
    href: 'contacto',
    text: 'Contacto'
  }];

  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>    
    <header id="header" className={`fixed-top menu-nav bg-navbar`}>
      <div className="w-100 navbarTop">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-around align-items-center">
            <div>
              <FontAwesomeIcon 
              width={18}
              color="white" icon={faEnvelopeSquare} />
              <span style={{marginLeft: '5px'}}>epincheira@qyc.cl</span>
            </div>
            <div>
              <FontAwesomeIcon
              width={18}
              color="white" icon={faPhone} />
              <span style={{marginLeft: '5px'}}>+569 6769 1262</span>
            </div>
            </div>
            <div className="col-12 col-lg-6 containerSocialMedia">
              <div className="social-media">
                <a className="ref-icon" target="_blank">
                  <img 
                  src="/assets/face.png"
                  />
                </a>
                <a className="ref-icon" target="_blank">
                  <img 
                  src="/assets/ig.png"
                  />
                </a>
                <a className="ref-icon" target="_blank">
                  <img 
                  width={20}
                  src="/assets/twitter.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>   
      <nav className={`navbar navbar-expand-lg navbar-dark mt-0`}>
        <div className="container f-flex align-items-center">
          <Logo 
          width={170}
          />
          <button
          className={`navbar-toggler ${!showMenuMobile && 'collapsed'}`} 
          type="button"
          onClick={()=>{
            setShowMenuMobile(!showMenuMobile)
          }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${showMenuMobile && 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
              <li className="nav-item">
                <Link
                href="/">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link
                  href="/empresa">
                  <a className="nav-link" href="#">Empresa</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/servicios">
                <a className="nav-link" href="#">Servicios</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/proyectos">
                <a className="nav-link" href="#">Proyectos</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/contacto">
                <a className="nav-link" href="#">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
   
    </>
  );
};

export default NavDesktop;
