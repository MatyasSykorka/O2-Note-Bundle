import Form from "next/form";

interface deleteFinishedProps {
        isVisibleIV: boolean;
        onClose: () => void;
};

const DeleteFinishedNotes: React.FC<deleteFinishedProps> = ({ isVisibleIV, onClose }) => {
        if ( !isVisibleIV ) { return null };

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
                                        Delete completed notes:
                                </h1>
                                <div
                                        className="
                                                bg-gray-200
                                                h-30
                                                w-110
                                                rounded-xl
                                        "
                                >
                                        <p
                                                className="
                                                        text-center
                                                        text-2xl
                                                "
                                        >
                                                Are you sure, you want to delete all your completed notes?
                                        </p>
                                </div>
                                <button
                                        type="submit"
                                        className="
                                                bg-gray-400
                                                h-10
                                                w-70
                                                rounded-xl
                                                duration-300
                                                place-self-center
                                                hover:font-bold
                                                hover:bg-gray-900
                                                hover:text-white
                                        "
                                        onClick={ () => onClose() }
                                >
                                        Yes, I want to have a clear desk!
                                </button>
                        </Form>
                </div>
        );
};

export default DeleteFinishedNotes;