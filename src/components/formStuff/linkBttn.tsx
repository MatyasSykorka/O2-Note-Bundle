import Link from "next/link";

interface homeBttn {
        children: string;
        href: string;
}

const LINKBTTN: React.FC<homeBttn> = ({
        children,
        href
}) => (
        <Link 
                href={href}
                className="
                        h-12
                        w-52
                        mt-8
                        block
                        place-self-center
                        bg-blue-300
                        rounded-3xl
                        content-center
                        text-center
                        text-xl
                        duration-50
                        hover:font-bold
                        hover:w-54
                        hover:h-13
                        hover:bg-blue-400
                        hover:shadow-black/50
                        hover:shadow-md
                        hover:rounded-4xl
                "
        >
                {children}
        </Link>
);

export default LINKBTTN;