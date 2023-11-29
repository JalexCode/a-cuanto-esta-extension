
function LoadingComponent(){
    return (
        <div className="flex flex-col items-center justify-center p-2 transition duration-300 opacity-100">
            <div className="flex items-center justify-center">
                <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow-lg shadow-slate-700 dark:shadow-slate-900 rounded-md text-white bg-blue-500 dark:bg-slate-600" disabled={true}>
                    <svg className="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Cargando...
                </button>
            </div>
        </div>
    );
}
export default LoadingComponent;