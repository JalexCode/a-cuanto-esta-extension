import HeaderAboutComponent from "./HeaderAboutComponent";
import logo from '../images/icon.png';
import jalex from '../images/jalex.png';

const AboutPage = ({ handlePage }) => {
    return (
        <div className="">
            <HeaderAboutComponent handlePage={handlePage} />
            <div className="flex flex-col items-center p-6">
                {/* Imagen */}
                <img src={logo} alt="Logo" className="w-24 h-32" />

                {/* Nombre */}
                <p className="mt-2 text-lg font-bold text-black  dark:text-slate-600 dynamic-fill-color-2">¿A CUÁNTO ESTÁ?</p>

                {/* Fuente de Información */}
                <p className='text-sm text-slate-700 dark:text-slate-400'>Fuente de datos: <a className="text-blue-500 dark:text_white" href='https://eltoque.com/tasas-de-cambio-de-moneda-en-cuba-hoy' target='_blank' rel="noreferrer">eltoque.com</a></p>

                {/* Desarrollador */}
                <div className="flex items-center mt-2">
                    <p className="text-sm text-black dark:text-slate-500 mr-2">Desarrollado por </p>
                    <img src={jalex} alt="JalexCode Logo" className="w-24" />
                </div>

            </div>
        </div>
    )
}
export default AboutPage;