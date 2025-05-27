import Link from "next/link";


export default function NotFound() {
        return (
                <>
                        <h1
                                className="
                                        text-center
                                        font-bold
                                        text-5xl
                                        mt-40
                                        mb-10
                                        font-mono
                                "
                        >
                                Page not found!
                        </h1>
                        <div
                                className="
                                        h-[28rem]
                                        w-1/3
                                        bg-yellow-200
                                        place-self-center
                                        place-items-center
                                        p-2
                                        font-mono
                                        text-xl
                                        border-4
                                        border-yellow-700
                                        rounded-md
                                        shadow-xl
                                        shadow-gray-600
                                "
                        >
                                <p>
                                        Couldn't found requested resource.
                                </p>
                                <br />
                                <p>
                                        You can go back to&nbsp;
                                        <Link 
                                                href="/"
                                                className="
                                                        font-bold
                                                "
                                        >
                                                Main page
                                        </Link>
                                        .
                                </p>
                        </div>
                </>
        );
}