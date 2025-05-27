interface subBttn {
        value: string;
};

const FORMBTTN: React.FC<subBttn> = ({
        value
}) => (
        <input 
                type="submit" 
                value={value}
                className="
                        mt-22
                        place-self-center
                        border-1
                        border-black
                        rounded-full
                        bg-gray-200
                        h-16
                        w-82
                        text-3xl
                        block
                        duration-50
                        hover:font-bold
                        hover:shadow-black/50
                        hover:shadow-lg
                        hover:h-18
                        hover:w-90
                        hover:bg-green-500
                        hover:border-green-600
                        hover:rounded-full
                "
        />
);

export default FORMBTTN;