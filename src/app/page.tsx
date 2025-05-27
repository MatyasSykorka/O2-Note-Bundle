import TITLETXT from "../components/title/title";
import SECITEM from "../components/selection/selection";


export default function Root() {
        return (
                <>
                        <TITLETXT>
                                Note bundle
                        </TITLETXT>
                        <main
                                className="
                                        border-1
                                        border-black
                                        bg-yellow-200
                                        w-1/3
                                        place-self-center
                                        rounded-sm
                                        h-100
                                        p-8
                                        text-center
                                        justify-center
                                        shadow-gray-600
                                        shadow-lg
                                "
                        >
                                <article
                                        className="
                                                flex
                                                place-self-center
                                                mb-7
                                        "
                                >
                                        <p
                                                className="
                                                        text-2xl
                                                        underline
                                                        underline-offset-4
                                                "
                                        >
                                                &nbsp;Simple and easy to write down your ideas into&nbsp;notes! :)&nbsp;
                                        </p>
                                </article>
                                <menu
                                        className="
                                                flex
                                                place-self-center
                                        "
                                >
                                        {/* Make new function of button */}
                                        <SECITEM 
                                                href="/login"
                                        > 
                                                Login
                                        </SECITEM>
                                        <SECITEM href="/register">
                                                Register
                                        </SECITEM>
                                </menu>
                                
                        </main>
                </>
        );
};