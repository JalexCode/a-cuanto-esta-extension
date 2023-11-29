import HeaderAboutComponent from "./HeaderAboutComponent";
import logo from '../images/icon.png';
import jalex from '../images/jalex.png';
import jalexLight from '../images/jalex-light.png';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';

import { Tooltip } from "react-tooltip";

const AboutPage = ({ handlePage, darkMode }) => {
    return (
        <div className="">
            <HeaderAboutComponent handlePage={handlePage} />
            <div className="flex flex-col items-center p-6">

                <img src={logo} alt="Logo" className="w-24 h-32" />

                <p className="mt-2 text-lg font-bold text-black  dark:text-slate-600 dynamic-fill-color-2">¿A CUÁNTO ESTÁ?</p>
                <p className='mt-2 text-xs text-slate-700 dark:text-slate-400'>Esta aplicación te mostrará el valor de cambio actual del Dólar, Euro y MLC en Cuba.</p>
                <p className='text-xs text-slate-700 dark:text-slate-400'>Fuente de datos: <a className="text-blue-500 dark:text_white" href='https://eltoque.com/tasas-de-cambio-de-moneda-en-cuba-hoy' target='_blank' rel="noreferrer">eltoque.com</a></p>

                <a id="clickable">
                    <Tooltip anchorSelect="#clickable" clickable>
                        <div className="flex flex-col">
                            <p className="text-xs text-white">Mis redes sociales</p>
                            <div className="flex flex-row items-center gap-2 justify-between m-auto">
                                <a title="GitHub" href="https://github.com/JalexCode" target="_blank"><img src={github} alt="GitHub" /></a>
                                <a title="Instagram" href="https://www.instagram.com/jalexoasismusic/" target="_blank"><img src={instagram} alt="Instagram" /></a>
                                <a title="Facebook" href="https://facebook.com/javyalejandro99" target="_blank"><img src={facebook} alt="Facebook" /></a>
                            </div>
                        </div>
                    </Tooltip>
                    <div className="flex items-center mt-2">
                        <p className="text-sm text-black dark:text-slate-500 mr-2">Desarrollado por</p>
                        <img src={!darkMode ? jalexLight : jalex} alt="JalexCode Logo" className="w-24" />
                    </div>
                </a>

            </div>
        </div>
    )
}
export default AboutPage;