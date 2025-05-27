import Form from "next/form";
import FORMITEM from "../formStuff/formLabel&Input";

interface noteWindowProps {
        isVisible: boolean;
        onClose: () => void;
}

const NewNote: React.FC<noteWindowProps> = ( { isVisible, onClose } ) => {
        if ( !isVisible ) { return null };
        
        return (
                <div
                        className="
                                fixed
                                inset-0
                                flex
                                bg-black/50
                                z-50
                                backdrop-blur-sm
                                items-center
                                justify-center
                        "
                >
                        <Form
                                action=""
                                className="
                                        flex
                                        flex-col
                                        gap-3
                                        bg-amber-700
                                        p-7
                                        rounded-2xl
                                        border-2
                                        border-black
                                "
                        >
                                <p 
                                        onClick={ () => onClose() }
                                        className="
                                                bg-red-700
                                                rounded-full
                                                justify-center
                                                flex
                                                items-center
                                                w-6
                                                h-6
                                                hover:bg-red-600
                                                hover:font-bold
                                                duration-200
                                                place-self-end
                                                border-2
                                                border-red-600
                                                hover:border-red-400
                                                text-lg
                                        "
                                >
                                        X
                                </p>
                                <h1
                                        className="
                                                text-2xl
                                                text-center
                                                font-bold
                                                text-white
                                                text-4xl
                                                mb-4
                                        "
                                >
                                        New note
                                </h1>
                                {/*
                                        <label
                                                className="
                                                        font-bold
                                                        text-xl
                                                "
                                        >
                                                Title:
                                        </label>
                                        <FORMITEM
                                                htmlFor="username"
                                                type="text"
                                                name="username"
                                        >
                                                Username
                                        </FORMITEM>
                                */}
                                <FORMITEM
                                        type="text"
                                        placeholder="Doctor"
                                        name="noteTitle"
                                        htmlFor="noteTitle"
                                        required
                                >
                                        Title:
                                </FORMITEM>
                                <div>
                                        <label 
                                                className="
                                                        font-bold
                                                        text-xl
                                                "
                                        >
                                                High priority:
                                        </label>
                                                &nbsp;
                                        <input 
                                                type="checkbox" 
                                                name="priorityBox" 
                                                id="priorityBox" 
                                                className="
                                                        size-4
                                                "
                                        />
                                </div>
                                <textarea 
                                        placeholder="Go to the doctor at 2pm"
                                        name="noteContent"
                                        className={`
                                                text-black
                                                text-lg
                                                bg-gray-100
                                                max-h-[55rem]
                                                min-h-[20rem]
                                                max-w-[120rem]
                                                min-w-[45rem]
                                                resize
                                                p-3
                                                rounded-sm
                                        `}
                                        required
                                ></textarea>
                                <button
                                        type="submit"
                                        className="
                                                bg-gray-400
                                                h-10
                                                w-40
                                                rounded-xl
                                                hover:font-bold
                                                duration-200
                                                place-self-center
                                        "
                                        // onClick={ () => onClose() }
                                >
                                        Make a new note
                                </button>
                        </Form>
                </div>
        );
};

export default NewNote;