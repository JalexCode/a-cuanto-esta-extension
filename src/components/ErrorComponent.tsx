const ErrorComponent = ({errorMessage, refresh}) => {
    return (
        <div className="bg-red-500 text-white p-4 m-3 rounded transition duration-300 opacity-100">
            <div className="flex flex-row">
                <div className="items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="items-center justify-center w-full">
                    <h3 className="">Ha ocurrido un error</h3>
                        <div className="">
                            {errorMessage}
                            {/* <ul role="list" className="yb abo ato">
                                <li>Your password must be at least 8 characters</li>
                                <li>Your password must include at least one pro wrestling finishing move</li>
                            </ul> */}
                        </div>
                        <div className="mt-2 hover:cursor-pointer hover:text-red-200 hover:underline w-fit" onClick={refresh}>Reintentar</div>
                </div>
            </div>
        </div>
    );
}
export default ErrorComponent;