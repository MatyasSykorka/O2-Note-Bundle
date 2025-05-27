"use client";
import { useState } from "react";
import DeleteUser from "@/components/modal/DeleteUser";

interface setDeleteUser {
        isVisibleV: boolean;
}

const DELETEUSERBTTN = () => {
        const [showDeleteUser, setShowDeleteUserModal] = useState(false);
        

        return (
                <>
                        <button 
                                onClick={ () => setShowDeleteUserModal(true) }
                                type="button"
                                className="
                                        place-self-center
                                        content-center
                                        justify-center
                                        bg-red-700
                                        rounded-md
                                        block
                                        text-center
                                        h-12
                                        w-96
                                        text-2xl
                                "
                        >
                                Delete my Note bundle account
                        </button>
                        <DeleteUser isVisibleV={showDeleteUser} onClose={ () => {setShowDeleteUserModal(false)} }/>
                </>
        );
}

export default DELETEUSERBTTN;