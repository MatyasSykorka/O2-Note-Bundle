import Link from "next/link";
import LABELBOOK from "@/components/usersBook/label";
import UsersInfo from "@/components/usersBook/usersInfo";
import TITLETXT from "@/components/title/title";
import { auth } from "@/auth";
import Image from "next/image";
import DELETEUSERBTTN from "@/components/usersBook/deleteUserBttn/deleteUserBttn";


export const metadata = {
        title: "Note bundle - User",
        description: 'Note app by Maty',
};


/*
interface UserBttn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        children: React.ReactNode;
};

const USERBTTN: React.FC<UserBttn> = ({
        children,
        ...buttonProps
}) => (
        <button
                {...buttonProps}
                className="
                        border-1
                        border-black
                        rounded-lg
                        text-xl
                        text-gray-50
                        duration-250
                        hover:font-bold
                        bg-gray-600
                        w-80
                        h-20
                        content-center
                        m-3
                        text-center
                "
        >
                {children}
        </button>
);
*/


export default async function user() {
        const session = await auth();

        return (
                <>
                        <TITLETXT>
                                {session?.user ? session.user.name : 'Not logged in'}
                        </TITLETXT>
                        {
                                // Github profile picture
                        }
                        <main
                                className="
                                        bg-amber-800
                                        w-1/4
                                        min-h-[45rem]
                                        place-self-center
                                        rounded-md
                                        p-12
                                        shadow-black/70
                                        shadow-xl
                                        mb-42
                                "
                        >
                                <h1
                                        className="
                                                place-self-center
                                                text-4xl
                                                text-center
                                                font-bold
                                                mb-10
                                        "
                                >
                                        "Logged username + ID"
                                </h1>
                                {
                                        session?.user?.image && (
                                                <Image
                                                        src={session.user.image}
                                                        alt={session.user.name ?? "Avatar"}
                                                        width={150}
                                                        height={150}
                                                        className="
                                                                rounded-full
                                                                place-self-center
                                                                mb-8
                                                                border-3
                                                                border-amber-900
                                                        "
                                                />
                                        )
                                }
                                <LABELBOOK>
                                        Full name:
                                </LABELBOOK>
                                <UsersInfo>
                                        {session?.user ? session.user.name : "Not logged in"}
                                </UsersInfo>
                                <LABELBOOK>
                                        Number of all notes:
                                </LABELBOOK>
                                <UsersInfo>
                                        "Number of users notes"
                                </UsersInfo>
                                
                                <menu
                                        id="settings"
                                        className="
                                                border-2
                                                border-amber-900
                                                place-self-center
                                                mt-10
                                                rounded-md
                                                mt-20
                                                mb-8
                                                text-2xl
                                                p-4
                                        "
                                >
                                        {
                                        session?.user ? null : (
                                        <Link 
                                                href="/user/change-fullname"
                                                className="
                                                        place-self-center
                                                        content-center
                                                        justify-center
                                                        bg-yellow-700
                                                        rounded-md
                                                        block
                                                        text-center
                                                        h-12
                                                        w-68
                                                        text-2xl
                                                        mb-6
                                                "
                                        >
                                                Change full name
                                        </Link>)
                                        }
                                        <DELETEUSERBTTN />
                                </menu>
                        </main>
                </>
        );
};