"use client"
// import { signIn } from '@/app/auth';
import { login } from '@/app/lib/actions/auth';

interface logInBttnProps {
        children: React.ReactNode;
};

const logInBttn: React.FC<logInBttnProps> = ({ 
        children 
}) => {
        return (
                <button
                        onClick={ () => login() }
                        className="
                                h-16
                                w-60
                                mt-8
                                block
                                place-self-center
                                bg-gray-300
                                rounded-4xl
                                content-center
                                text-center
                                text-xl
                                duration-50
                                border-1
                                border-black
                                hover:font-bold
                                hover:w-64
                                hover:h-18
                                hover:bg-gray-400
                                hover:shadow-black/50
                                hover:shadow-md
                                hover:rounded-full
                        "
                >
                        {children}
                </button>
        );
};

export default logInBttn;
