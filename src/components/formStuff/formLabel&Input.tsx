interface formItem extends React.InputHTMLAttributes<HTMLInputElement> {
        children: string;
        htmlFor: string;
        type: string;
        name: string;
};

const FORMITEM: React.FC<formItem> = ({
        children,
        htmlFor,
        type,
        name,
        ...tags
}) => (
        <>        
                <label
                        htmlFor={htmlFor}
                        className="
                                place-self-center
                                text-3xl
                                font-bold
                                flex
                                mb-4
                        "
                >
                        {children}
                </label>
                <input
                        type={type}
                        name={name}
                        {...tags}
                        className="
                                place-self-center
                                content-center
                                justify-center
                                bg-white
                                rounded-xl
                                flex
                                text-center
                                mb-8
                                h-12
                                w-68
                                text-2xl
                                shadow-black/60
                                shadow-lg
                        "
                />
        </>
);

export default FORMITEM;