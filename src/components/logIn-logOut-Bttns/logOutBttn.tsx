"use client";
import { logout } from '@/app/lib/actions/auth';

interface logOutBttnProps {
        children: React.ReactNode;
};

const logOutBttn: React.FC<logOutBttnProps> = ({ 
        children 
}) => {
        return (
                <button
                        onClick={ () => logout() }
                        className="
                                content-center
                                text-center
                                bg-gray-400
                                h-14
                                w-28
                                rounded-xl
                                duration-200
                                hover:shadow-xs
                                hover:bg-gray-200
                                ml-2
                                mr-2
                                hover:font-bold
                        "
                >
                        {children}
                </button>
        );
};

export default logOutBttn;
