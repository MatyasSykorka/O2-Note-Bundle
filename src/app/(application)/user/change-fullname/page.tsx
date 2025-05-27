import Form from "next/form";

import TITLETXT from "@/components/title/title";
import FORMITEM from "@/components/formStuff/formLabel&Input";
import FORMBTTN from "@/components/formStuff/formBttn";
import LINKBTTN from "@/components/formStuff/linkBttn";


export const metadata = {
        title: 'Note bundle - change-fullname',
        description: 'Note app by Maty',
};

export default function Login() {
        return (
                <main>
                        <TITLETXT>
                                Change your full name
                        </TITLETXT>
                        <Form
                                action=""
                                className="
                                        w-1/3
                                        h-180
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
                                <FORMITEM
                                        htmlFor="actual_name"
                                        type="text"
                                        name="actual_name"
                                        value={`* Actual your name *`}
                                        readOnly
                                >
                                        Your actual name
                                </FORMITEM>
                                <FORMITEM
                                        htmlFor="f_name"
                                        type="text"
                                        name="f_name"
                                >
                                        First name
                                </FORMITEM>
                                <FORMITEM
                                        htmlFor="l_name"
                                        type="text"
                                        name="l_Name"
                                >
                                        Last name
                                </FORMITEM>
                                <FORMBTTN 
                                        value="Change my name"
                                />
                                <LINKBTTN
                                        href="/user"
                                >
                                        Cancel
                                </LINKBTTN>
                        </Form>
                </main>
        );
};