// Type variables
interface TitleProps {
        children: any;
};

// Define button design in navigation bar
const TITLETXT : React.FC<TitleProps> = ({
        children
}) => (
        <h1
                className="
                        text-center
                        font-bold
                        text-6xl
                        mb-14
                        mt-22
                "
        >
                {children}
        </h1>
);

export default TITLETXT;