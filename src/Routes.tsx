import SignIn from "./pages/SignIn";
import WelcomePage from "./pages/WelcomePage";
import AccessDenied from "./pages/AccessDenied.tsx";
import FinanceHomePage from "./pages/FinanceHomePage.tsx";

export const Routes = [
    {
        path : "/",
        element : <WelcomePage/>
    },
    {
        path : "/signIn",
        element : <SignIn/>
    },
    {
        path: "/accessDenied",
        element: <AccessDenied />
    },
    {
        path: "/dashboard",
        element: <FinanceHomePage />
    }
]
