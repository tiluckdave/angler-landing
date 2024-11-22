function Button({ children, onClick, type = "primary" }) {
    if (type === 'secondary') {
        return (
            <button
                onClick={onClick}
                className="transition-all ease-in-out duration-500 bg-gradient-to-r  from-blue-800 to-sky-700 hover:shadow-lg  text-white bg-size-200 bg-pos-0 hover:bg-pos-100 font-medium py-0.5 px-0.5 rounded-full"
            >
                <span className="transition-all ease-in-out duration-500 flex w-full bg-white hover:bg-slate-100 rounded-full py-2 px-8">
                    <span className="transition-all ease-in-out duration-500 bg-gradient-to-r  from-blue-800 to-sky-700 text-transparent bg-clip-text">
                        {children}
                    </span>
                </span>
            </button>
        );
    }
    return (
        <button
            onClick={onClick}
            className="transition-all ease-in-out duration-500 bg-gradient-to-r  from-blue-800 to-sky-700 hover:shadow-lg  text-white bg-size-200 bg-pos-0 hover:bg-pos-100 font-medium py-2.5 px-8 rounded-full"
        >
            {children}
        </button>
    );
}

function CTAButton({ children, onClick, bck }) {

    if (bck === 'light') {
        return (<button
            onClick={onClick}
            className={`transition-all ease-in-out duration-500 bg-gradient-to-r  from-red-500 to-yellow-500 hover:shadow-lg text-lg font-medium text-white bg-size-200 bg-pos-0 hover:bg-pos-100 py-2.5 px-10 rounded-full`}
        >
            {children}
        </button>
        );
    }
    return (
        <button
            onClick={onClick}
            className="transition-all ease-in-out duration-500 flex w-full bg-white hover:bg-neutral-200 rounded-full py-2.5 px-10 hover:shadow-xl"
        >
            <span className="transition-all text-lg font-medium ease-in-out duration-500 bg-gradient-to-r  from-blue-800 to-sky-700 text-transparent bg-clip-text">
                {children}
            </span>
        </button>
    );
}

export { Button, CTAButton };