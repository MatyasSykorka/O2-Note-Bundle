interface labelBook {
        children: string; 
};

const LABELBOOK: React.FC<labelBook> = ({ 
        children 
}) => (
        <label
                className="
                        place-self-center
                        flex
                        text-2xl
                        text-gray-200
                        mb-4
                        mt-3
                "
        >
                {children}
        </label>
);

export default LABELBOOK;