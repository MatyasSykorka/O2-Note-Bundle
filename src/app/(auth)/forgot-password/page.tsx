import Form from "next/form";

import TITLETXT from "@/components/title/title";
import FORMBTTN from "@/components/formStuff/formBttn";
import FORMITEM from "@/components/formStuff/formLabel&Input";
import LINKBTTN from "@/components/formStuff/linkBttn";

export const metadata = {
        title: 'Note bundle - forget password',
        description: 'Note app by Maty',
};

export default function ForgotPW() {
        return (
                <main>
                        <TITLETXT>
                                Let's change your password
                        </TITLETXT>
                        <Form
                                action=""
                                className="
                                        w-1/3
                                        h-170
                                        p-8
                                        bg-amber-200
                                        border-1
                                        rounded-sm
                                        place-self-center
                                        shadow-gray-600
                                        shadow-lg
                                "
                        >
                                <FORMITEM
                                        htmlFor="id"
                                        type="number"
                                        name="id"
                                >
                                        Your ID
                                </FORMITEM>
                                <FORMITEM
                                        htmlFor="changePW"
                                        type="password"
                                        name="changePW"
                                >
                                        New password
                                </FORMITEM>
                                <FORMITEM
                                        htmlFor="changePWII"
                                        type="password"
                                        name="changePWII"
                                >
                                        Retype new password
                                </FORMITEM>
                                <FORMBTTN
                                        value="Change password"
                                />
                                <LINKBTTN
                                        href="/"
                                >
                                        Main page
                                </LINKBTTN>
                        </Form>
                </main>
        );
};