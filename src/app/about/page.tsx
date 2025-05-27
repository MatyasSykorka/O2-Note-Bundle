import Link from "next/link";

import TITLETXT from "../../components/title/title";


export default function About() {
        return (
                <>
                        <TITLETXT>
                                About Note bundle
                        </TITLETXT>
                        <div
                                className="
                                        h-[28rem]
                                        w-1/3
                                        bg-yellow-200
                                        place-self-center
                                        place-items-center
                                        text-center
                                        p-5
                                        font-mono
                                        text-xl
                                        border-4
                                        border-yellow-700
                                        rounded-md
                                        shadow-xl
                                        shadow-gray-600
                                "
                        >
                                <p
                                        className="font-bold"
                                >
                                        Simple note app. Based on Next.js and PostgreSQL.
                                </p>
                                <br />
                                <p
                                        className="underline"
                                >
                                        This app was created in school practice&nbsp;
                                        <strong>
                                                (2025).
                                        </strong>
                                </p>
                                <p>
                                        If you want to see web source code, klick on my github username in&nbsp;footer.
                                </p>
                                <br /><br /><br /><br /><br />
                                <Link 
                                        href="/"
                                        className="
                                                duration-450
                                                hover:font-bold
                                                hover:text-2xl
                                                
                                        "
                                >
                                        Click to retun to the home page.
                                </Link>
                        </div>
                </>
        );
}