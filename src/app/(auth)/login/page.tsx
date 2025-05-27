import Form from "next/form";

import TITLETXT from "@/components/title/title";
import FORMITEM from "@/components/formStuff/formLabel&Input";
import FORMBTTN from "@/components/formStuff/formBttn";
import LINKBTTN from "@/components/formStuff/linkBttn";
import LOGINBTTN from "@/components/logIn-logOut-Bttns/logInBttn";


export const metadata = {
        title: 'Note bundle - Login',
        description: 'Note app by Maty',
};

export default function Login() {
        return (
                <>
                        <TITLETXT>
                                Login to Note bundle
                        </TITLETXT>
                        <div
                                className="
                                        w-1/3
                                        h-190
                                        p-8
                                        bg-amber-200
                                        border-1
                                        rounded-sm
                                        place-self-center
                                        shadow-gray-600
                                        shadow-lg
                                        mb-42
                                "
                        >
                                <Form
                                        action={""}   
                                >
                                        <FORMITEM
                                                htmlFor="username"
                                                type="text"
                                                name="username"
                                        >
                                                Username
                                        </FORMITEM>
                                        <FORMITEM
                                                htmlFor="passwd"
                                                type="password"
                                                name="passwd"
                                        >
                                                Password
                                        </FORMITEM>
                                        <LINKBTTN
                                                href="/forgot-password"
                                        >
                                                Forgetten password? 
                                        </LINKBTTN>
                                        <FORMBTTN 
                                                value="Login"
                                        />
                                </Form>
                                <LOGINBTTN>
                                        Login with Github
                                </LOGINBTTN>
                                <LINKBTTN
                                        href="/"
                                >
                                        Back to main page
                                </LINKBTTN>
                        </div>
                </>
        );
};