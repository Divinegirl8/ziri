import SignIn from "./pages/SignIn";
import WelcomePage from "./pages/WelcomePage";

export const Routes = [
    {
        path : "/",
        element : <WelcomePage/>
    },
    {
        path : "/signIn",
        element : <SignIn/>
    }
]