import { addMinutes, isAfter, parseISO } from 'date-fns';
import Logo from '@components/Common/Logo'
import package_json from '../../package.json';

const ContainerFooter = () => {

  return (
    <footer>
      <div className="footer container mt-3">
        <div className="row">
          <div className="col-12 col-lg-3 text-center">
            <img src='/logo/QC-Logo.png'></img>
            <div className="social-media mt-3 mb-3">
              <span>Siguenos en</span>
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
          <div className="col-6 col-lg-3 text-xs-center">
            <div className="footer-list mt-2">
              <h3>Chile</h3>
              <ul>
                <li>
                  Camino de la Colina 1455, Huechuraba, Santiago – Chile
                </li>
              </ul>
            </div>           
          </div>
          <div className="col-6 col-lg-3 text-xs-center">
            <div className="footer-list mt-2">
              <h3>Chile</h3>
              <ul>
                <li>
                  Camino de la Colina 1455, Huechuraba, Santiago – Chile
                </li>
              </ul>
            </div> 
          </div>
          <div className="col-lg-3 col-12 mt-3">
            <div className="row p-0">
              <div className="col-12 text-center align-items-center justify-content-center">
                <a className="btn-orange mt-2">Ver Todo los proyectos</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="black-line text-center">
        <p>{'C&Q Revestimiento Industrial'} © 2022 -  Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default ContainerFooter;
