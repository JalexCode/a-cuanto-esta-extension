const CardComponent = ({ title, value, diff, currency }) => {
    const success = value !== undefined;
    const diffClass = diff < 0 ? 'text-green-500 dark:text-green-300' : diff > 0 ? 'text-red-500 dark:text-red-300' : ''
    return (
        <div className="p-2 mt-1 flex-row">
            <div className="p-2 bg-blue-500 dark:bg-slate-700 shadow-md  dark:shadow-slate-900 text-center rounded-xl -mt-6 ml-3 absolute">
                {title === "Compra" ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
                    </svg>
                }
            </div>
            <div className="flex-col rounded-lg shadow-lg text-black dark:text-gray-300 dark:shadow-xl dark:shadow-slate-900 bg-white dark:bg-slate-600 items-end justify-end ">
                <div className="text-end pt-1 p-2 ml-9">
                    <p className="text-sm capitalize font-light">{title}</p>
                    <p className={`mb-0 ${success ? "font-bold text-base" : "font-semibold text-base"} ${diffClass}`}>{value?.toFixed(2) ?? "No disponible"} {success ? currency : ""}</p>
                </div>
                <hr />

                <div className="p-2 text-end">
                    {success ? (
                        diff == 0 ? "Estable" :
                            <p>{diff > 0 ? '🔺' : diff < 0 ? '🔻' : ''}<span className={`font-bold text-diff ${diffClass}`}>{diff > 0 ? "+" : ""}{diff}</span> CUP</p>
                    ) : "Desconocido"}
                </div>
            </div>
        </div>
    );
};

export default CardComponent;