import AuthLeft from "../Components/Auth/AuthLeft.jsx";
import AuthRight from "../Components/Auth/AuthRight.jsx";

const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <AuthLeft />
            <AuthRight />
        </div>
    );
};

export default Auth;
