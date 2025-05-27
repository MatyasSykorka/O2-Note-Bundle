interface usersInfoLabel {
        children: any;
};

const UsersInfo: React.FC<usersInfoLabel> = ({
        children
}) => (
        <p
                className="
                        place-self-center
                        flex
                        text-3xl
                        text-amber-500
                        mb-4
                        mt-3
                "
        >
                {children}
        </p>
);

export default UsersInfo;
