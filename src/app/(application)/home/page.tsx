import { redirect } from "next/dist/server/api-utils";
import TITLETXT from "../../../components/title/title";
import { auth } from "@/auth";

export const metadata = {
        title: 'Note bundle - Home',
        description: 'Note app by Maty',
};


export default async function Home() {
        const session = await auth();

        /*
        if (session?.user) {

        }
        */

        return (
                <>
                        <TITLETXT>
                                Welcome {session?.user ? session.user.name : "Not logged user" }!
                        </TITLETXT>
                        <article
                                className="
                                        border-2
                                        h-[50rem]
                                        w-1/2
                                        justify-center
                                        place-self-center
                                        rounded-3xl
                                        p-6
                                        text-center
                                        bg-yellow-100
                                        mb-42
                                "
                        >
                                <p
                                        className="
                                                font-bold
                                                text-2xl
                                        "
                                >
                                        Last edited notes
                                </p>
                                <div
                                        className="
                                                border-1
                                        "
                                >
                                        <p>
                                                board
                                        </p>
                                </div>
                        </article>
                </>
        );
};