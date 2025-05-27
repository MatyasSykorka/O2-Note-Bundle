import Link from "next/link";


interface SelectItemProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
        href: string,
        children: string
};

const SECITEM: React.FC<SelectItemProps> = ({
        href,
        children,
        ...tags
}) => (
        <Link 
                href={href}
                {...tags}
                className="
                        h-50
                        w-70
                        bg-red-500
                        rounded-3xl
                        m-5
                        text-center
                        text-4xl
                        content-center
                        duration-250
                        hover:font-bold
                        hover:shadow-xl
                        hover:shadow-black/70
                "
        >
                {children}
        </Link>
);

export default SECITEM;