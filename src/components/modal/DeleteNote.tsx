import Form from "next/form";

interface deleteNoteProps {
        isVisibleII: boolean;
        onClose: () => void;
}

const DeleteNote: React.FC<deleteNoteProps> = ({ isVisibleII, onClose }) => {
        if ( !isVisibleII ) { return null };
        
        return (
                <div
                        className="
                                fixed
                                inset-0
                                flex
                                bg-red-800/30
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
                                        p-8
                                        rounded-2xl
                                        border-2
                                        border-black
                                        gap-8
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
                                                text-4xl
                                                text-black
                                        "
                                >
                                        Delete note:
                                </h1>
                                <div
                                        className="
                                                bg-gray-200
                                                h-22
                                                w-90
                                                rounded-xl
                                        "
                                >
                                        <p
                                                className="
                                                        text-center
                                                        text-2xl
                                                "
                                        >
                                                Are you sure, you want to delete this note?
                                        </p>
                                </div>
                                <button
                                        onClick={ () => onClose() }
                                        // add function that sand sql querry to delete note
                                        type="submit"
                                        className="
                                                bg-gray-400
                                                h-10
                                                w-40
                                                rounded-xl
                                                duration-200
                                                place-self-center
                                                hover:font-bold
                                                hover:bg-red-800
                                                hover:text-white
                                        "
                                >
                                        Yes, delete it!
                                </button>
                        </Form>
                </div>
        );
};

export default DeleteNote