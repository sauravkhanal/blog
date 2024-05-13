export default function Button({ variant, url, className, children, onClick, ...rest }) {
    return (
        <>
            {
                variant === "outline" ?
                    <button
                        className={`rounded-[.18rem] bg-transparent font-bold text-black dark:text-white \ hover:bg-green-600 transition border border-text2 border-opacity-20 px-3 py-1 disabled:opacity-50 disabled:pointer-events-none active:scale-90 ${className}`}
                        {...rest}
                        onClick={onClick}
                    >
                        {children}
                    </button>
                    :
                    <button
                        className={`rounded-[.18rem] bg-green-500 px-4 py-[6px] font-bold text-base text-black dark:text-white hover:opacity-80 transition disabled:opacity-50 disabled:pointer-events-none active:scale-90 ${className}`}
                        {...rest}
                        onClick={onClick}
                    >
                        {children}
                    </button>
            }
        </>
    );
}
