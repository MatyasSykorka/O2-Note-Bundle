import Link from "next/link";

interface FootItem {
        children: React.ReactNode;
};

const FOOTERITEM: React.FC<FootItem> = ({
        children
}) => (
        <ul
                className="
                        self-center
                        font-bold
                        text-gray-50
                        hover:underline
                        hover:underline-offset-4
                        text-lg
                "
        >
                {children}
        </ul>
);


export default function Footer() {
        return (
                <footer
                        className="
                                h-24
                                w-full
                                bg-blue-900
                                fixed
                                inset-x-0
                                bottom-0
                                pl-8
                                pr-8
                                flex
                                justify-between
                        "
                >
                        <FOOTERITEM>
                                <p>
                                        Website created by&nbsp;
                                        <Link 
                                                href="https://github.com/MatyasSykorka"
                                                className="
                                                        hover:text-yellow-500
                                                "
                                        >
                                                MatyasSykorka
                                        </Link>
                                        &nbsp;:)
                                </p>
                        </FOOTERITEM>
                        <FOOTERITEM>
                                <Link 
                                        href="/about"
                                        className="
                                                hover:text-yellow-500
                                        "
                                >
                                        &nbsp;About&nbsp;
                                </Link>
                        </FOOTERITEM>
                </footer>
        );
};