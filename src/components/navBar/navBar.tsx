// import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import LOGOUTBTTN from "@/components/logIn-logOut-Bttns/logOutBttn";


// Type variables
interface NavItemProps {
        href: string;
        children: any;
};

// Define button design in navigation bar
const NAVITEM: React.FC<NavItemProps> = ({
        href, 
        children
}) => (
        <Link href={href}
                className="
                        content-center
                        text-center
                        bg-gray-400
                        h-14
                        w-28
                        rounded-xl
                        duration-200
                        hover:shadow-xs
                        hover:bg-gray-200
                        ml-2
                        mr-2
                        hover:font-bold
                "
        >
                {children}
        </Link>
);

// creating navigation bar
export default async function HNavBar() {
        const session = await auth();

        return (
                <nav
                        className="
                                h-18
                                w-[60%]
                                content-center
                                bg-red-600
                                rounded-2xl
                                justify-center
                                items-center
                                flex
                                mb-6
                                shadow-md
                                shadow-black/50
                                place-self-center
                        "
                >
                        {/* Using defined button */}
                        {/* <NAVITEM
                                href="/"
                        >
                                Note bundle
                        </NAVITEM> */}
                        <NAVITEM
                                href="/home"
                        >
                                Home
                        </NAVITEM>
                        <NAVITEM
                                href="/my-notes"
                        >
                                Note bundle
                        </NAVITEM>
                        <NAVITEM
                                href="/user"
                        >
                                {session?.user ? session.user.name : "Nepřihlášený" }
                        </NAVITEM>
                        <LOGOUTBTTN>
                                Log out
                        </LOGOUTBTTN>
                </nav>
        );
};